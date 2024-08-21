import React, { useState } from 'react';
import { View, Text, Image, FlatList, ViewToken } from 'react-native';
import { CardCourseProps } from '../Utils/Types';
import { styles } from './StylsCardCourse';
import FetchedItem from './ComponentCardVideosList';

const CardCourse: React.FC<CardCourseProps> = ({ item }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50, 
  };

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      const pageIndex = viewableItems[0].index ?? 0;
      setCurrentPage(pageIndex);
    }
  };

  return (
    <View style={styles.CardCoursecontainer}>
      <Image source={item.Images} style={styles.CardCourseImage} />
      <Text style={styles.CardCourseTitle}>{item.CourseTitle}</Text>
      <View style={styles.separator} />
      {item.fetchedItems.length > 0 && (
        <FlatList
          data={item.fetchedItems}
          renderItem={({ item }) => <FetchedItem item={item} />}
          keyExtractor={(index) => index.toString()}
          style={styles.fetchedItemsList}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      )}
      <View style={styles.paginationContainer}>
        {Array.from({ length: 4 }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentPage ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default CardCourse;
