import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavbarIconHome from '../../Assets/ImagesData.tsx/HomeLogo';
import NavbarDownloadIcon from '../../Assets/ImagesData.tsx/DownLoadIcon';
import { AppStackParamList } from '../../utils/interfaces/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from './StylesNavbar';
import BrandLogo from '../../Assets/ImagesData.tsx/BrandLogo';

type NavigationProp = StackNavigationProp<AppStackParamList>;

const NavbarComponent: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
        <NavbarIconHome />
      </TouchableOpacity>
      <View style={styles.brandLogoContainer}> 
        <BrandLogo />
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Downloads')}>
        <NavbarDownloadIcon />
      </TouchableOpacity>
    </View>
  );
};

export default NavbarComponent;
