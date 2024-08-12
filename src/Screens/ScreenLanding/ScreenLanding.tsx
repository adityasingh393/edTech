import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './StyleLanding';
import BrandLogo from '../../Assets/ImagesData.tsx/BrandLogo';
import { ScreenLandingNavigationProp } from './utils/types';


const ScreenLanding: React.FC = () => {
  const navigation = useNavigation<ScreenLandingNavigationProp>();

  return (
    
    <View style={styles.container}>
      <StatusBar translucent backgroundColor= 'transparent' barStyle="dark-content" />
      <Image source={require('../../Assets/Images/LandingImage.png')} style={styles.LandingImage} />
      <View style={styles.card}>
        <Text style={styles.Headertitle}>Welcome to </Text>
        <Text style = {styles.BrandHeader}>EDUTECH</Text>
       <Text style={styles.infotext}>
          When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
        </Text>
        <TouchableOpacity
          style={styles.button}
      onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
       
        
      </View>
    </View>
  );
};

export default ScreenLanding;

