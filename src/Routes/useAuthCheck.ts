import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { setUser } from '../Screens/redux/authSlice';
import { User } from '../utils/interfaces/types';

export const useAuthCheck = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('authorisationToken');
        if (token) {
          const currentUser = auth().currentUser;
          const googleUser = await GoogleSignin.getCurrentUser();

          let uid: string | null = null;

          if (currentUser) {
            uid = currentUser.uid;
          } else if (googleUser) {
            uid = googleUser.user.id;
          }

          if (uid) {
            const user: User = {
              email: currentUser?.email || googleUser?.user.email!,
              name: currentUser?.displayName || googleUser?.user.name!,
              phone: '',
              password: '',
            };
            dispatch(setUser(user));
          }
        } else {
          dispatch(setUser(null));
        }
      } catch (error) {
        dispatch(setUser(null));
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, [dispatch]);

  return isLoading;
};
