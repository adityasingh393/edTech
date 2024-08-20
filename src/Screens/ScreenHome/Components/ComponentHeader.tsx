import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './StylesHeader';
import UserProfile from '../../../Assets/ImagesData.tsx/UserProfileLogo';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../utils/firebaseAuthentication';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    logoutUser(dispatch);
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Hey!</Text>
      <View style={styles.UserProfile}>
        <UserProfile />
      </View>
      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={handleLogout}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
