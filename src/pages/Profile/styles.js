import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
   },

   profileHeader: {
      marginLeft: 20,
      height: 80,
      width: 300,
      justifyContent: 'center',
      alignSelf: 'flex-start',

   },

   profileHeaderFirstText: {
      fontSize: 28,
      color: '#6A3093'
   },

   profileHeaderSecondText: {
      fontSize: 38,
      color: '#6A3093'
   },

   userCardContainer: {
      marginTop: 20,
      backgroundColor: '#f2f2f2',
      width: 350,
      height: 200,
      borderRadius: 10,
      justifyContent: "space-around",
   },

   userContainer: {
      flexDirection: 'row'
   },

   user: {
      marginLeft: 10,
      fontSize: 18
   },

   bio: {
      marginLeft: 10,
      marginRight: 10,
      textAlign: 'justify'
   },

   telephone: {
      marginLeft: 10
   },

   birthday: {
      marginLeft: 10
   },

   actionButtonContainer: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
   },

   actionButton: {
      alignSelf: 'flex-end',
      backgroundColor: '#7159c1',
      height: 40,
      paddingHorizontal: 15,
      width: 150,
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginRight: 10
   },

   actionText: {
      fontSize: 18,
      color: '#fff'
   }
});