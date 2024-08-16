import React from 'react';
import { View, Text} from 'react-native';
import styles from './StylesHeader';
import UserProfile from '../../../Assets/ImagesData.tsx/UserProfileLogo';

const Header: React.FC = ({  }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Hey! Aakansha </Text>
      <View style = {styles.UserProfile}>
      <UserProfile/>
      </View>
    </View>
  );
};


export default Header;
