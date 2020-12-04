import { useContext } from 'react';
import { AuthContext } from '../store/context/AuthProvider';

const useAuth = () => {
   const context = useContext(AuthContext);
   const { SignIn, user, signed, SignOut,SignUp, loading } = context;
   return {
      SignIn,
      SignUp,
      SignOut,
      user,
      signed,
      loading
   }
};

export default useAuth;