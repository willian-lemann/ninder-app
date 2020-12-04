import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from '../../components/Menu';

import Home from '../../pages/Home';
import Profile from '../../pages/Profile';

const PrivateStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
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
               backgroundColor: '#f2f2f2',
               elevation: 0
            },
            headerTintColor: '#7159c1'
         }}
      />
   </PrivateStack.Navigator>
);
export default HomeStackScreen;