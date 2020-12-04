import React, { lazy, Suspense } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';

import useAuth from '../hooks/useAuth';

import AuthRoutes from './AuthRoutes';
const PrivateRoutes = lazy(() => import('./PrivateRoutes'));

const Routes = () => {
   const { signed } = useAuth();

   const Loading = () => (
      <ActivityIndicator
         size='large'
         color='#7159c1'
         style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
         }}
      />
   );

   return (
      <>
         <StatusBar barStyle='default' backgroundColor='#7159c1' />
         {signed ? (
            <Suspense
               fallback={<Loading />}>
               <PrivateRoutes />
            </Suspense>
         ) : <AuthRoutes />}
      </>
   );
};

export default Routes;