import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from './screens/DrawerContent';

import PrivateStackScreen from './screens/PrivateStackScreen';

const Drawer = createDrawerNavigator();

const PrivateRoutes = () => {
   return (
      <Drawer.Navigator
         drawerContent={(props) => <DrawerContent {...props} />}
         drawerType='front'
         drawerStyle={{ width: 300 }}
         screenOptions={{ headerShown: false }}>

         <Drawer.Screen
            name='Home'
            component={PrivateStackScreen}
         />

      </Drawer.Navigator>
   )
};

export default PrivateRoutes;