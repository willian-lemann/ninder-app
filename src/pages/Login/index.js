import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import backgroundImage from '../../assets/background.png';
import welcomeTitle from '../../assets/welcome-title.png';

import useAuth from '../../hooks/useAuth';

const Login = ({ navigation }) => {
   const [credencials, setCredencials] = useState({
      email: '',
      password: ''
   });
   const [isLoading, setIsLoading] = useState(false);
   const { SignIn } = useAuth();

   const HandleInputChange = (name, value) => {
      setCredencials({ ...credencials, [name]: value });
   }

   const HandleSubmit = async () => {
      setIsLoading(true);

      try {
         await SignIn(credencials);

         setIsLoading(false);

      } catch (error) {
         setIsLoading(false);
         console.log(error)
      }
   }

   const HandleRegister = () => {
      navigation.push('Register');
   }

   return (
      <SafeAreaView style={styles.container}>
         <Image source={backgroundImage} style={styles.backgroundImage} />
         <View style={styles.headerContainer}>
            <Image source={welcomeTitle} />
         </View>

         <View style={styles.inputsContainer}>
            <View style={styles.inputTextContainer}>
               <View style={styles.inputIconContainer} >
                  <Feather name='user' size={30} color='#fff' />
               </View>
               <TextInput
                  style={styles.inputText}
                  placeholder='Seu e-email'
                  onChangeText={(text) => HandleInputChange('email', text)}
               />
            </View>

            <View style={styles.inputTextContainer}>
               <View style={styles.inputIconContainer} >
                  <Feather name='lock' size={30} color='#fff' />
               </View>
               <TextInput
                  style={styles.inputText}
                  secureTextEntry
                  placeholder='Sua senha'
                  onChangeText={(text) => HandleInputChange('password', text)}
               />
            </View>
         </View>

         <View style={styles.actionsContainer}>
            <TouchableOpacity
               onPress={HandleSubmit}
               style={styles.loginButtonContainer}>
               <Text style={styles.loginButtonText}>LOGIN</Text>
               {isLoading && <ActivityIndicator style={{ marginLeft: 10 }} size='large' color='#7159c1' />}
            </TouchableOpacity>

            <TouchableOpacity
               onPress={HandleRegister}
               style={styles.registerButtonContainer}>
               <Text style={styles.registerButtonText}>CADASTRAR</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
}

export default Login;