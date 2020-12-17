import React, { useEffect, useState } from 'react';
import { Image, View, Text } from 'react-native';
import * as Permissions from 'expo-permissions'
import { getCurrentPositionAsync } from 'expo-location';
import api from '../../services/axios/config';
import { connect, disconnect, listenTo } from '../../services/socket';



import { Feather } from '@expo/vector-icons';
import avatar from '../../assets/avatar.png';
import { styles } from './styles';

import MapView, { Marker, Callout } from 'react-native-maps';

const Home = ({ navigation }) => {
   const [users, setUsers] = useState([]);
   const [currentRegion, setCurrentRegion] = useState(null)

   const HandleRegionChanged = (region) => {
      setCurrentRegion(region);
      LoadUsers();
   }

   const LoadInitialPosition = async () => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status === 'granted') {
         const { coords } = await getCurrentPositionAsync({
            enableHighAccuracy: true,
         });

         const { latitude, longitude } = coords;

         setCurrentRegion({
            latitude,
            longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
         })
      }
   }

   const ConnectWebSocket = () => {
      disconnect();
      const { latitude, longitude } = currentRegion;
      connect(latitude, longitude);
   }

   const LoadUsers = async () => {
      const { latitude, longitude } = currentRegion;

      try {
         const response = await api.get('/search', {
            params: {
               latitude: latitude,
               longitude: longitude,
            }
         });

         setUsers(response.data);
         ConnectWebSocket();
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      LoadInitialPosition();
      LoadUsers
   }, []);


   useEffect(() => {
      listenTo(newDev => {
         console.log(newDev)
         setUsers([...users, newDev.user])
      });
   }, [users]);

   if (!currentRegion) {
      return null;
   }

   return (
      <>
         <MapView

            onRegionChangeComplete={HandleRegionChanged}
            initialRegion={currentRegion}
            style={styles.map}>
            {users.map(user => (
               <Marker
                  key={user._id}
                  coordinate={{
                     latitude: user.location.coordinates[1],
                     longitude: user.location.coordinates[0]
                  }}>

                  <Image style={styles.avatar} source={avatar} />

                  <Callout
                     onPress={() => navigation.navigate('Profile', { user })}>
                     <View style={styles.callout}>
                        <Text style={styles.calloutText}>Falar com {user.name}</Text>
                        <Feather name='message-square' size={38} color='#7159c1' />
                     </View>
                  </Callout>
               </Marker>
            ))}
         </MapView>
      </>
   );
}

export default Home;