import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

import { Feather } from '@expo/vector-icons';

import useAuth from '../../hooks/useAuth';

const DrawerContent = ({ navigation }) => {
   const [isLoading, setIsLoading] = useState(false);
   const { SignOut, user } = useAuth();
   const HandleSignOut = () => {
      SignOut();
      setIsLoading(true);
      navigation.goBack();
   }

   return (
      <View style={styles.container}>
         <View style={styles.userContainer}>
            <View style={styles.userContentContainer}>
               <Image source={{ uri: `http://192.168.33.108:3333/uploads/${user?.image_url}` }} style={styles.profileImage} />
               <Text style={styles.userName}>  {user?.name} </Text>
               <View style={styles.online} />
            </View>
            <View style={styles.userInterationsContainer}>
               <View style={styles.friendshipsContainer}>
                  <Text style={styles.friendshipsCount}> 10</Text>
                  <Text style={styles.friendshipsText}> Amizades</Text>
               </View>

               <View style={styles.appointmentsContainer}>
                  <Text style={styles.appointmentCount}>7</Text>
                  <Text style={styles.appointmentText}> Encontros</Text>
               </View>
            </View>

            <View style={styles.divider} />
         </View>

         <TouchableOpacity
            style={styles.logOutContainer}
            onPress={HandleSignOut}
         >
            <Feather name='log-out' size={30} style={styles.icon} />
            <Text style={styles.itemText}>
               Sign Out
            </Text>
            {isLoading && <ActivityIndicator size='large' color='#7159c1' />}
         </TouchableOpacity>
      </View >
   );
}

const styles = StyleSheet.create({
   container: {
      height: '100%',
      width: '100%',
      justifyContent: 'space-between',
   },

   userContainer: {
      height: 150,
      justifyContent: 'space-between'
   },

   userContentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 100,
   },

   userName: {
      fontSize: 18
   },

   online: {
      backgroundColor: 'green',
      height: 20,
      width: 20,
      borderRadius: 100
   },

   userInterationsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around'
   },

   friendshipsContainer: {
      flexDirection: 'row'
   },

   friendshipsCount: {
      fontSize: 18,
      fontWeight: 'bold'
   },

   friendshipsText: {
      fontSize: 18
   },

   appointmentsContainer: {
      flexDirection: 'row'
   },

   appointmentCount: {
      fontSize: 18,
      fontWeight: 'bold'
   },

   appointmentText: {
      fontSize: 18,
   },

   divider: {
      height: 1,
      width: '100%',
      backgroundColor: '#f1f1f1'
   },

   profileImage: {
      marginTop: 10,
      marginLeft: 10,
      height: 80,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50
   },

   logOutContainer: {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
   },

   icon: {
      marginLeft: 10
   },

   itemText: {
      marginLeft: 40,
      fontSize: 18,
   }
});

export default DrawerContent;