import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
   const navigation = useNavigation();

   return (
      <TouchableOpacity
         style={styles.container}
         onPress={() => navigation.openDrawer()}
      >
         <Feather
            name='menu'
            size={40}
            color='#fff'
         />
      </TouchableOpacity>
   );
}

export default Menu;