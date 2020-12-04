import React, { useState } from 'react';
import { format, differenceInYears } from 'date-fns';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import api from '../../services/axios/config';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';

const Profile = () => {
   const { params } = useRoute();
   const [user, setUser] = useState(params.user);

   const GetParsedDate = (date) => {
      console.log(date)
      const newDate = new Date(date);
      const formattedDay = format(newDate, 'dd/MM/yyyy');
      return formattedDay;
   }

   const GetAge = (birthday) => {
      const currentDate = Date.now();
      return differenceInYears(new Date(currentDate), new Date(birthday));
   }

   return (
      <View style={styles.container}>
         <View style={styles.profileHeader}>
            <Text style={styles.profileHeaderFirstText}>Conversar com,</Text>
            <Text style={styles.profileHeaderSecondText}>{user?.name}</Text>
         </View>

         <View style={styles.userCardContainer}>
            <View style={styles.userContainer}>
               <Text style={styles.user}>{user?.name} </Text>
               <Text style={styles.user}>48 anos</Text>
            </View>
            <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus illum harum nemo sunt, quia commodi eius nulla consequatur, odit possimus animi veniam reiciendis quibusdam laborum quod beatae modi temporibus. Vitae.</Text>

            <View style={styles.actionButtonContainer}>
               <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>Falar com {user?.name}</Text>
                  <FontAwesome name='whatsapp' size={28} color='#008000' />
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
}

export default Profile;