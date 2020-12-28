import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../../hooks/useAuth';
import Menu from '../../components/Menu';

import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import Chat from '../../pages/Chat';

const PrivateStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
   const { user } = useAuth();

   return (
      <PrivateStack.Navigator>
         <PrivateStack.Screen
            name='Home'
            component={Home}
            options={{
               headerTitle: '',
               headerShown: true,
               headerLeft: () => <Menu />,
               headerStyle: {
                  backgroundColor: '#7159c1'
               }
            }}
         />

         <PrivateStack.Screen
            name='Profile'
            component={Profile}
            options={{
               headerShown: true,
               headerTitle: '',
               headerStyle: {
                  backgroundColor: '#fff',
                  elevation: 0
               },
               headerTintColor: '#7159c1'
            }}
         />

         <PrivateStack.Screen
            name='Chat'
            component={Chat}
            options={{
               headerShown: false
            }}
         />
      </PrivateStack.Navigator>
   );
}
export default HomeStackScreen;