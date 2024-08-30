
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Animated, RefreshControl } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../Redux/store';
import { fetchDataRequest } from '../Redux/Slices/HomeSlice'; 
import { cardsData } from '../Utils/Constants';
import { styles } from './StylsCardCourse';

import CardCourse from './ComponentCardCourseList';
import { ExpandingDot } from 'react-native-animated-pagination-dots';

const CombinedCardList: React.FC = () => {
  const dispatch = useDispatch();
  const {
    data: fetchedData,
    loading,
    error,
  } = useSelector((state: RootState) => state.home);

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [refreshing, setRefreshing] = useState(loading);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(fetchDataRequest())
     setRefreshing(false);
  };

  const isLoading = loading && !refreshing;

  return (
    <View style={{ flex: 1 }}>
      {isLoading && (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      {error && !refreshing && <Text style={styles.error}>Error: {error}</Text>}
      {!isLoading && (
        <FlatList
          data={cardsData.map((item, index) => ({
            ...item,
            fetchedItems: fetchedData.slice(index * 5, index * 5 + 5),
          }))}
          renderItem={({ item }) => <CardCourse item={item} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          pagingEnabled
          snapToAlignment="center"
          decelerationRate="fast"
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#0000ff']}
            />
          }
        />
      )}
       <ExpandingDot
data={cardsData.map((item, index) => ({
  ...item,
  fetchedItems: fetchedData.slice(index * 5, index * 5 + 5),
}))}        scrollX={scrollX}
        inActiveDotOpacity={0.6}
        dotStyle={styles.dotStyle}
        containerStyle={styles.dotContainer}
        activeDotColor="#6177EE"
        inActiveDotColor="#ccc"
      />
    </View>
  );
};

export default CombinedCardList;