import React from 'react';
import { View, Text, Button} from 'react-native';
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
      <Text style={styles.headerText}>Hey! Aakansha</Text>
      <View style={styles.UserProfile}>
        <UserProfile />
      </View>
      <Button 
        onPress={handleLogout} 
        title="Logout" 
        color="#841584"  
      />
    </View>
  );
};

export default Header;
