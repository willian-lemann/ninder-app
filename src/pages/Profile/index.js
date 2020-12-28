import React, { useState } from 'react';
import { format, differenceInYears } from 'date-fns';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';

const Profile = ({ navigation }) => {
   const { params } = useRoute();
   const [user, setUser] = useState(params.user);
   console.log(user)
   const GetFirstName = () => {
      const firstName = user?.name.split(' ')[0];
      return firstName
   }

   const GetAge = () => {
      const currentDate = Date.now();
      return differenceInYears(new Date(currentDate), new Date(user?.birthday));
   }

   const HandleChat = () => {
      navigation.push('Chat', { chatUser: user })
   }

   return (
      <View style={styles.container}>
         <View style={styles.profileHeader}>
            <Text style={styles.profileHeaderFirstText}>Conversar com,</Text>
            <Text style={styles.profileHeaderSecondText}>{GetFirstName()}</Text>
         </View>

         <View style={styles.userCardContainer}>
            <View style={styles.userContainer}>
               <Text style={styles.user}>{user?.name} </Text>
               <Text style={styles.user}>{GetAge()} anos</Text>
            </View>
            <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus illum harum nemo sunt, quia commodi eius nulla consequatur, odit possimus animi veniam reiciendis quibusdam laborum quod beatae modi temporibus. Vitae.</Text>

            <View style={styles.actionButtonContainer}>
               <TouchableOpacity
                  onPress={HandleChat}
                  style={styles.actionButton}>
                  <Text style={styles.actionText}>Iniciar chat</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
}

export default Profile;