import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../../components/shared/Header';

import Login from '../../pages/Login';
import Register from '../../pages/Register';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
   <AuthStack.Navigator >
      <AuthStack.Screen name='Login' component={Login} options={{
         headerShown: false
      }} />
      <AuthStack.Screen name='Register' component={Register} options={{
         headerShown: true,
         headerTitle: 'Register',
         headerStyle: {
            backgroundColor: '#7159c1',
            elevation: 0
         },
         headerTintColor: '#fff'

      }} />
   </AuthStack.Navigator>
)

export default AuthStackScreen;