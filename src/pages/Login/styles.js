import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#7159c1',
   },

   backgroundImage: {
      position: 'absolute'
   },

   headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 260
   },

   logoImage: {
      marginTop: 10
   },

   inputsContainer: {
      height: 200,
      width: '100%',
   },

   inputTextContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',

   },

   inputIconContainer: {
      height: 62,
      padding: 10,
      backgroundColor: '#624BB1',
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,

      alignItems: 'center',
      justifyContent: 'center'
   },

   inputText: {
      height: 62,
      width: 300,
      fontSize: 18,
      backgroundColor: '#ffffff',
      color: '#444',
      padding: 15,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
   },

   actionsContainer: {
      flex: 1,
      marginTop: 30,
      width: '100%',
      alignItems: 'center',
   },

   loginButtonContainer: {
      borderRadius: 8,
      height: 62,
      width: 352,
      backgroundColor: '#fff',
      marginBottom: 35,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
   },

   loginButtonText: {
      color: '#7159c1',
      fontWeight: 'bold',
      fontSize: 18
   },

   registerButtonContainer: {
      borderRadius: 8,
      height: 62,
      width: 352,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#fff',
      backgroundColor: 'transparent'
   },

   registerButtonText: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#fff'
   }


});