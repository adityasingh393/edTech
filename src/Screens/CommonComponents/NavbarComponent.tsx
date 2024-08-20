import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavbarIconHome from '../../Assets/ImagesData.tsx/HomeLogo';
import MoneyIcon from '../../Assets/ImagesData.tsx/MoneyIcon';
import NavbarDownloadIcon from '../../Assets/ImagesData.tsx/DownLoadIcon';
import { styles } from './StylesNavbar';
import { AppStackParamList } from '../../utils/interfaces/types';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<AppStackParamList, 'Downloads'>;

const NavbarComponent: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.navbarContainer}>
      <View style={styles.MoneyIcon}>
        <TouchableOpacity style={styles.navbarBottomIcons}>
          <MoneyIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.HomeIcon}>
        <TouchableOpacity style={styles.navbarBottomIcons}>
          <NavbarIconHome />
        </TouchableOpacity>
      </View>
      <View style={styles.DownloadIcon}>
        <TouchableOpacity
          style={styles.navbarBottomIcons}
          onPress={() => navigation.navigate('Downloads')}
        >
          <NavbarDownloadIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavbarComponent;
