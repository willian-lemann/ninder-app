import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

const Header = ({ title }) => {
   const navigation = useNavigation();

   return (
      <View style={styles.container}>
         <BorderlessButton onPress={() => navigation.goBack()}>
            <Feather name='arrow-left' size={24} color='#7159c1' />
         </BorderlessButton>

         <Text style={styles.titleText}>{title}</Text>

         <BorderlessButton onPress={() => alert('Abriu as infos do usuario')}>
            <Feather name='more-vertical' size={28} color='#7159c1' />
         </BorderlessButton>
      </View >
   );
}

export default Header;