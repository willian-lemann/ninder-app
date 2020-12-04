import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

   map: {
      flex: 1,
   },

   avatar: {
      width: 54,
      height: 54,
      borderRadius: 100,
      borderColor: '#fff',
   },

   marker: { 
      backgroundColor: 'red',
      borderRadius: 10,
      height: 284,
      width:100, 
     
   },

   callout: {
      height: 300,
      width: 260,
      borderRadius: 10,
      height: 40,
      opacity: 0.6,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },

   calloutText: {
      color: '#7159c1',
      fontSize: 18,

   },

   devName: {
      fontWeight: 'bold',
      fontSize: 16,
   },

   searchForm: {
      position: 'absolute',
      top: 20,
      left: 20,
      right: 20,
      zIndex: 5,
      flexDirection: 'row'
   },

   searchInput: {
      flex: 1,
      height: 50,
      backgroundColor: '#fff',
      color: '#333',
      borderRadius: 25,
      paddingHorizontal: 20,
      fontSize: 16,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: {
         width: 4,
         height: 4,
      },
      elevation: 2,
   },

   loadButton: {
      width: 50,
      height: 50,
      backgroundColor: '#7d40e7',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 15,
   },

   materialIcon: {
      color: '#fff',
      fontSize: 20
   }
});