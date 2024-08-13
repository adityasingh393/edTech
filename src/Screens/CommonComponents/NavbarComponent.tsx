import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DownloadIcon from '../../Assets/ImagesData.tsx/DownloadIcon';
import NavbarIconUser from '../../Assets/ImagesData.tsx/UserIcon';
import NavbarIconHome from '../../Assets/ImagesData.tsx/HomeLogo';
import { styles } from './StylesNavbar';

const NavbarComponent: React.FC = () => {
//   const navigation = useNavigation<ScreenCategoryNavigationProp>();
//   const navigationCart = useNavigation<ScreenCheckoutNavigationProp>();
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity style={styles.navbarBottomIcons}  >
      
      </TouchableOpacity >
      {/* <TouchableOpacity style={styles.navbarBottomIcons} >
      <NavbarIconHome/>
            </TouchableOpacity> */}
      {/* <TouchableOpacity style={styles.navbarBottomIcons}>
      <NavbarIconUser/>
      </TouchableOpacity> */}
     
    </View>
  );
};

export default NavbarComponent;