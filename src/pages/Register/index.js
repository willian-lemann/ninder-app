import React, { useRef, useState } from 'react';
import {
   View,
   Text,
   TouchableOpacity,
   KeyboardAvoidingView,
   Platform,
   TextInput,
   ActivityIndicator,
} from 'react-native';
import { format } from 'date-fns';
import useAuth from '../../hooks/useAuth';

import { BaseButton } from 'react-native-gesture-handler';
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

   const HandleBirthDayChange = (event, selectedDate) => {
      const currentDate = selectedDate || birthday;
      setShow(Platform.OS === 'ios');
      setBirthDay(currentDate);
   };

   const HandleSubmit = async (formData, { reset }) => {
      setLoading(true);

      const data = {
         ...formData,
         birthday
      };

      try {
         await SignUp(data);
         setLoading(false);
      } catch (error) {
         setLoading(false);
         console.log(error);
      }
      reset()
   }
 
   const formattedDay = format(birthday, 'dd/MM/yyyy');

   return (
      <KeyboardAvoidingView style={styles.container}>
         <KeyboardAwareScrollView style={styles.KeyboardAwareScrollView}>
            <Form ref={formRef} onSubmit={HandleSubmit}>
               <View style={styles.inputsContainer}>
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
                     placeholder='Nome'
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