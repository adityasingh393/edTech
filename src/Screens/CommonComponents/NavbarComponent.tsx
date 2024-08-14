import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import NavbarIconHome from '../../Assets/ImagesData.tsx/HomeLogo';
import { styles } from './StylesNavbar';
import MoneyIcon from '../../Assets/ImagesData.tsx/MoneyIcon';
import NavbarDownloadIcon from '../../Assets/ImagesData.tsx/DownLoadIcon';

const NavbarComponent: React.FC = () => {
//   const navigation = useNavigation<ScreenCategoryNavigationProp>();
//   const navigationCart = useNavigation<ScreenCheckoutNavigationProp>();
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.MoneyIcon}>
      <TouchableOpacity style={styles.navbarBottomIcons}  >
      <MoneyIcon/>
</TouchableOpacity >
</View>
<View style = {styles.HomeIcon}>
      <TouchableOpacity style={styles.navbarBottomIcons} >
      <NavbarIconHome/>
            </TouchableOpacity>
            </View>
            <View style = {styles.DownloadIcon}>
      <TouchableOpacity style={styles.navbarBottomIcons}>
     < NavbarDownloadIcon />     
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavbarComponent;