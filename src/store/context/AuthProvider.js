import React, { createContext, useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { getCurrentPositionAsync } from 'expo-location';
import * as Permissions from 'expo-permissions';
import api from '../../services/axios/config';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const UpdateUserLocation = async (userId) => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status === 'granted') {
         const { coords } = await getCurrentPositionAsync({
            enableHighAccuracy: true,
         });

         const { latitude, longitude } = coords;

         const location = {
            latitude,
            longitude
         }

         await api.patch(`/users/${userId}`, { location });
      }
   }

   async function SignIn(credencials) {
      const { email } = credencials;
      const user = await api.get('/users/email', { params: { email } });

      if (!user)
         return

      const { _id } = user.data;

      await UpdateUserLocation(_id);

      const response = await api.post('/auth/authenticate', credencials);

      setUser(response.data.user);

      await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.data.user));
      await AsyncStorage.setItem('@RNAuth:token', response.data.token);
   }

   async function SignUp(data) {
      await api.post('/auth/register', data);
   }

   async function SignOut() {
      await AsyncStorage.clear();
      setUser(null);
   }

   useEffect(() => {
      async function LoadStoragedData() {
         const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
         const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

         if (storagedUser && storagedToken) {
            setUser(JSON.parse(storagedUser));
            setLoading(false);
         }
      }

      LoadStoragedData();
   }, []);

   return (
      <AuthContext.Provider value={{
         signed: !!user,
         user,
         SignIn,
         SignUp,
         SignOut,
         loading
      }}>
         {children}
      </AuthContext.Provider>
   );

};

export { AuthProvider, AuthContext };