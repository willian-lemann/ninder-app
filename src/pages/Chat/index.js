import React, { useCallback, useEffect, useState } from 'react';
import { API_URL as HOST } from '../../../.env.json';
import { useRoute } from '@react-navigation/native';

import { GiftedChat } from 'react-native-gifted-chat';
import Header from '../../components/shared/Header';

import { styles } from './styles';
import { StatusBar, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useAuth from '../../hooks/useAuth';

const Chat = () => {
   const { user } = useAuth();
   const { params } = useRoute();
   const [text, setText] = useState('');
   const [messages, setMessages] = useState([]);

   const onSend = useCallback((newMessages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
   }, [])

   useEffect(() => {
      setMessages([
         {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
               _id: 2,
               name: 'React Native',
               avatar: `${HOST}/uploads/${params.chatUser.image_url}`,
            },
         },

         {
            _id: 2,
            text: 'Hello asdasd',
            createdAt: new Date(),
            user: {
               _id: 11,
               name: 'React Native',
               avatar: `${HOST}/uploads/${params.chatUser.image_url}`,
            },
         },
      ])
   }, [])

   return (
      <>
         <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
         <Header title={params.chatUser.name} />
         <GiftedChat
         messagesContainerStyle={{backgroundColor:'white'}}
            text={text}
            onInputTextChanged={text => setText(text)}
            messages={messages}
            isTyping={!!text}
            alwaysShowSend
            placeholder='Escreva uma mensagem'
            onSend={messages => onSend(messages)}
            user={{
               _id: user?._id,
               avatar: user?.image_url,
               name: user?.name
            }}
         />
      </>
   );
}

export default Chat;