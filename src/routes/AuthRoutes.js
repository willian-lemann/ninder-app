import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from './screens/DrawerContent';

import AuthStackScreen from './screens/AuthStackScreen';

const Drawer = createDrawerNavigator();

const AuthRoutes = () => (
   <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerType='front'
      screenOptions={{ headerShown: false }}>
      <Drawer.Screen
         name='Auth'
         component={AuthStackScreen}
         options={{
            gestureEnabled: false,
         }}
      />
   </Drawer.Navigator>
);

export default AuthRoutes;