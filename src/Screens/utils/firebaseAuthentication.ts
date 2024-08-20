import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../redux/authSlice';
import { User } from '../../utils/interfaces/types';
import { Alert } from 'react-native';
import { AppDispatch } from '../../Redux/store';
import { unsubscribe } from '../ScreenSubscription/redux/subscriptionSlice';

export const signupUser = async (user: User, dispatch: AppDispatch) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(user.email, user.password);
    const idToken = await userCredential.user.getIdToken();
    await AsyncStorage.setItem('authorisationToken', idToken);
    const newUser: User = {
      email: user.email,
      name: user.name,
      phone: user.phone,
      password: user.password,
    };
    dispatch(setUser(newUser));
  } catch (error) {
    Alert.alert('Cannot sign up, please try again.');
  }
};

export const loginUser = async (email: string, password: string, dispatch: AppDispatch) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    const idToken = await userCredential.user.getIdToken();
    await AsyncStorage.setItem('authorisationToken', idToken);

    const currentUser = auth().currentUser;
    if (currentUser) {
      const user: User = {
        email: currentUser.email!,
        name: currentUser.displayName!,
        phone: '',
        password: '',
      };
      dispatch(setUser(user));
    }
  } catch (error) {
    dispatch(setUser(null));
    Alert.alert('Error occurred, cannot log you in. Please check your credentials and try again.');
  }
};

export const loginWithGoogle = async (dispatch: AppDispatch) => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
    const userCredential = await auth().signInWithCredential(googleCredential);
    const idToken = await userCredential.user.getIdToken();
    await AsyncStorage.setItem('authorisationToken', idToken);

    const currentUser = auth().currentUser;
    if (currentUser) {
      const user: User = {
        email: currentUser.email!,
        name: currentUser.displayName!,
        phone: '',
        password: '',
      };
      dispatch(setUser(user));
    }
  } catch (error) {
    // console.error("Google Sign-In Error: ", error);
    Alert.alert('Cannot log you in , please try again!!');
  }
};

export const logoutUser = async (dispatch: AppDispatch) => {
  try {
 
  const currentUser = auth().currentUser;
  
  if (currentUser) {
  console.log("User currently signed in:", currentUser.email);
  

  await auth().signOut();
  await AsyncStorage.removeItem('authorisationToken');
  dispatch(setUser(null));
  console.log("User signed out successfully.");
  } 
  

  const isGoogleSignedIn = await GoogleSignin.getCurrentUser();
  

  if (isGoogleSignedIn) {
  await GoogleSignin.signOut();
  await AsyncStorage.removeItem('authorisationToken');
  dispatch(setUser(null));
  console.log("Google user signed out.");
  }
  
 
  console.log("User signed out successfully.");
  } catch (error) {
  console.error("Error logging out:", error);
  Alert.alert('Cannot log you out, please try again.');
  }
  };
  