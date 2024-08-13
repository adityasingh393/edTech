

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, ToastAndroid } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import {  HomeScreenProps} from '../../utils/interfaces/types';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../utils/firebaseAuthentication';
import { Screen } from 'react-native-screens';

const HomeScreen = () => {
    const isFocused = useIsFocused();

    React.useEffect(() => {
      if (Platform.OS === 'android' && isFocused) {
        ToastAndroid.show('Screenshots are disabled on this screen', ToastAndroid.SHORT);
        
      } 
      return () => {
        if (Platform.OS === 'android') {
         
        }
      };
    }, [isFocused]);
  const navigation = useNavigation<HomeScreenProps>();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logoutUser(dispatch);
   
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Page!</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: {
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;
