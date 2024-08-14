import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import { cardsData } from '../Utils/Constants';
import { styles } from './StylsCardCourse';
import CardCourse from './ComponentCardCourseList';

const CombinedCardList: React.FC = () => {
  const { data: fetchedData, loading, error } = useSelector((state: RootState) => state.home);

  return (
    <View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>Error: {error}</Text>}
      <FlatList
        data={cardsData.map((item, index) => ({
          ...item,
          fetchedItems: fetchedData.slice(index * 5, index * 5 + 5),
        }))}
        renderItem={({ item }) => <CardCourse item={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        style={{ marginBottom: 20 }}
      />
    </View>
  );
};

export default CombinedCardList;
