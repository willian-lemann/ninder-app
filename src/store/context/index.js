import React from 'react';
import { AuthProvider } from './AuthProvider';

const Context = ({ children }) => {
   return (
      <AuthProvider>
         {children}
      </AuthProvider>
   );
}

export default Context;