import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import envConfig from '../../config/envConfig';

const { API_URL } = envConfig;

const api = axios.create({
   baseURL: API_URL
});

api.interceptors.request.use(async config => {
   const token = await AsyncStorage.getItem('@RNAuth:token');
   console.log(token)
   if (token)
      config.headers['Authorization'] = `Bearer ${token}`;

   return config;

}, error => {
   Promise.reject(error);
});



export default api;