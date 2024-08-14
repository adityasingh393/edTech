import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchDataRequest } from './Redux/Slices/HomeSlice';
import CombinedCardList from './Components/CombinedCardList';
import NavbarComponent from '../CommonComponents/NavbarComponent';
import { styles } from './StylesHome';
import Header from './Components/ComponentHeader';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Header/>
      <CombinedCardList />
      <NavbarComponent/>
    </View>
  );
};

export default HomeScreen;
