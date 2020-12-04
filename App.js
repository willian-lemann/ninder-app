import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';

import Routes from './src/routes';
import Context from './src/store/context';

const App = () => (
   <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <NavigationContainer>
         <Context>
            <Routes />
         </Context>
      </NavigationContainer>
   </>
);

export default App;

