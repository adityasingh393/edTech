import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../utils/firebaseAuthentication';
import styles from './StylesHeader';

const Header: React.FC = ({  }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    logoutUser(dispatch);
  };
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Hello, </Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};


export default Header;
