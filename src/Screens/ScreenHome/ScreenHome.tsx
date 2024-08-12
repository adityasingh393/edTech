import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchDataRequest } from './Redux/Slices/HomeSlice';
import Header from './Components/ComponentHeader';
import CardList from './Components/ComponentCardVideosList';
import { styles } from './StylesHome';
import HardcodedCardList from './Components/ComponentCardCourseList';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Header />
    <  HardcodedCardList/>
      <CardList />
    </View>
  );
};

export default HomeScreen;
