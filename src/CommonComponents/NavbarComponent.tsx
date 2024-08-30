import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import NavbarIconHome from '../Assets/ImagesData/HomeLogo';
import NavbarDownloadIcon from '../Assets/ImagesData/DownLoadIcon';
import Wishlist from '../Assets/ImagesData/Watchlist'; 
import { AppStackParamList } from '../utils/interfaces/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from './StylesNavbar';

type NavigationProp = StackNavigationProp<AppStackParamList>;
type Route = RouteProp<AppStackParamList>;

const NavbarComponent: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<Route>();

  const isHomeActive = route.name === 'Home';
  const isDownloadsActive = route.name === 'Downloads';
  const isWishlistActive = route.name === 'Watchlist'; 

  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Home')}>
        <NavbarIconHome stroke={isHomeActive ? 'blue' : '#6177EE'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Watchlist')}>
        <Wishlist stroke={isWishlistActive ? 'blue' : '#6177EE'} /> 
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Downloads')}>
        <NavbarDownloadIcon stroke={isDownloadsActive ? 'blue' : '#6177EE'} />
      </TouchableOpacity>
    </View>
  );
};

export default NavbarComponent;
