import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#7159c1',
   },

   inputsContainer: {
      marginTop: 40,
      backgroundColor: '#7159c1',
      justifyContent: 'center',
      alignItems: 'center'
   },

   inputText: {
      padding: 20,
      marginBottom: 10,
      fontSize: 18,
      width: 350,
      backgroundColor: '#f0f0f0',
      borderRadius: 8
   },

   birthDayInputText: {
      width: 270,
      padding: 20,
      marginBottom: 0,
   },

   birthDayInputTextContainer: {
      borderRadius: 8,
      backgroundColor: "#f0f0f0",
      width: 350,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },

   birthDayButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 68,
      width: 100,
      borderTopLeftRadius: 8,
      borderBottomEndRadius: 8
   },

   birthDayIcon: {
      marginRight: 10,
      color:'#7159c1'
   },

   datePicker: {
      flex: 1
   },

   KeyboardAwareScrollView: {
      flex: 1
   },

   buttonContainer: {
      marginTop: 30,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
   },

   button: {
      height: 60,
      width: 300,
      borderRadius: 8,
      backgroundColor: '#f0f0f0',
      justifyContent: 'center',
      alignItems: 'center'
   },

   buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#7159c1'
   }
});