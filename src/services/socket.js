import socketio from 'socket.io-client';
import envConfig from '../config/envConfig';

const { baseURL } = envConfig;

const socket = socketio(baseURL, {
   autoConnect: false,
});

const listenTo = (newUser) => {
   socket.on('user', newUser);
}

const connect = (latitude, longitude) => {
   socket.io.opts.query = {
      latitude,
      longitude,
   };
   socket.connect();
}

const disconnect = () => {
   if (socket.connected)
      socket.disconnect();
}

export {
   connect,
   disconnect,
   listenTo,
};