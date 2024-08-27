import React from 'react';
import {View, Text, FlatList, ActivityIndicator, Animated} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../Redux/store';
import {cardsData} from '../Utils/Constants';
import {styles} from './StylsCardCourse';
import CardCourse from './ComponentCardCourseList';
import { ExpandingDot } from 'react-native-animated-pagination-dots';

const CombinedCardList: React.FC = () => {
  const {
    data: fetchedData,
    loading,
    error,
  } = useSelector((state: RootState) => state.home);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>Error: {error}</Text>}
      <FlatList
        data={cardsData.map((item, index) => ({
          ...item,
          fetchedItems: fetchedData.slice(index * 5, index * 5 + 5),
        }))}
        renderItem={({item}) => <CardCourse item={item} />}
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
      />
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
