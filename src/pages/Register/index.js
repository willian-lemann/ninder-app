import React, { useRef, useState } from 'react';
import {
   View,
   Text,
   TouchableOpacity,
   KeyboardAvoidingView,
   Platform,
   TextInput,
   ActivityIndicator,
   Image,
   Switch
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { format } from 'date-fns';
import useAuth from '../../hooks/useAuth';

import { BaseButton, RectButton } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';

import { Form } from '@unform/mobile';
import { Input } from '../../components/Form';

import { styles } from './styles';

const Register = () => {
   const { SignUp } = useAuth();
   const formRef = useRef(null);
   const [birthday, setBirthDay] = useState(new Date(1598051730000));
   const [show, setShow] = useState(false);
   const [loading, setLoading] = useState(false);
   const [image, setImage] = useState(null);
   const [isAmerican, setIsAmerican] = useState(false);

   const HandleToggleSwitch = () => {
      setIsAmerican(!isAmerican);
   }

   const HandlePickImage = async () => {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

      if (status !== 'granted') {
         alert('Eita, precisamos de acesso às suas fotos...');
      }

      const result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1
      });

      if (result.cancelled) {
         return;
      }

      setImage(result.uri)
   };

   const HandleBirthDayChange = (event, selectedDate) => {
      const currentDate = selectedDate || birthday;
      setShow(Platform.OS === 'ios');
      setBirthDay(currentDate);
   };

   const HandleSubmit = async (formData, { reset }) => {
      setLoading(true);
      console.log(birthday)
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('password', formData.password);
      data.append('telephone', formData.telephone);
      data.append('birthday', format(birthday, 'dd/MM/yyyy'));
      data.append('nationality', isAmerican ? 'Americano' : 'Brasileiro');
      data.append('image', {
         name: `image_${Date.now()}`,
         type: 'image/png',
         uri: image
      });

      try {
         await SignUp(data);
         alert('Usuario salvo com sucesso!');
         setLoading(false);
         reset()
      } catch (error) {
         setLoading(false);
         console.log(error);
      }
   }

   const formattedDay = format(birthday, 'dd/MM/yyyy');

   return (
      <KeyboardAvoidingView style={styles.container}>
         <KeyboardAwareScrollView style={styles.KeyboardAwareScrollView}>
            <Form ref={formRef} onSubmit={HandleSubmit}>
               <View style={styles.inputsContainer}>

                  <View style={styles.imagePickerContainer}>
                     <RectButton
                        style={styles.imagePickerButton}
                        onPress={HandlePickImage}
                     >
                        {image ?
                           <Image source={{ uri: image }} style={styles.image} /> :
                           <Feather name='user' size={38} />}
                     </RectButton>
                     {image === null && <Text style={styles.imagePickerText}>Selecione uma foto</Text>}
                  </View>

                  <Input
                     name='email'
                     type='email'
                     style={styles.inputText}
                     placeholder='Seu e-email'
                     autoCapitalize='words'
                  />

                  <Input
                     name='password'
                     type='password'
                     style={styles.inputText}
                     placeholder='Senha'
                     autoCapitalize='words'
                  />

                  <Input
                     name='name'
                     type='name'
                     style={styles.inputText}
                     placeholder='Nome completo'
                     autoCapitalize='words'
                  />

                  <Input
                     name='telephone'
                     type='telephone'
                     style={styles.inputText}
                     placeholder='Telefone'
                     autoCapitalize='words'
                  />

                  <View style={styles.birthDayInputTextContainer}>
                     <TextInput
                        name='birthday'
                        style={[styles.inputText, styles.birthDayInputText]}
                        placeholder='Data de aniversario'
                        editable={false}
                        value={formattedDay}
                     />
                     <BaseButton style={styles.birthDayButton} onPress={() => setShow(!show)}>
                        <Feather name='calendar' size={40} style={styles.birthDayIcon} />
                     </BaseButton>
                  </View>
                  {show && (
                     <DateTimePicker
                        style={{ flex: 1 }}
                        value={birthday}
                        mode='date'
                        display='calendar'
                        is24Hour={true}
                        onChange={HandleBirthDayChange}
                     />
                  )}

                  <View style={styles.switchContainer}>
                     <Text style={styles.switchText}>Sou Americano</Text>
                     <Switch
                        trackColor={{ false: '#f0f0f0', true: '#f0f0f0' }}
                        thumbColor={isAmerican ? '#7159c1' : '#7159c1'}
                        onValueChange={HandleToggleSwitch}
                        value={isAmerican}
                     />
                  </View>
               </View>

               <View style={styles.buttonContainer}>
                  <TouchableOpacity
                     onPress={() => formRef.current.submitForm()}
                     style={styles.button}>
                     <Text style={styles.buttonText}>Cadastrar</Text>
                     {loading && <ActivityIndicator size='large' color='#7159c1' />}
                  </TouchableOpacity>
               </View>
            </Form>
         </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
   )
}

export default Register;