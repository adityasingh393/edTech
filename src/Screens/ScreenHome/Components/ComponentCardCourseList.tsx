import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import {  CardCourseProps } from '../Utils/Types';
import { styles } from './StylsCardCourse';
import FetchedItem from './ComponentCardVideosList';


const CardCourse: React.FC<CardCourseProps> = ({ item }) => (
  <View style={styles.CardCoursecontainer}>
    <Image source={item.Images} style={styles.CardCourseImage} />
    <Text style={styles.CardCourseTitle}>{item.CourseTitle}</Text>
   
    <View style={styles.separator} />
    
    {item.fetchedItems.length > 0 && (
      <FlatList
        data={item.fetchedItems}
        renderItem={({ item }) => <FetchedItem item={item} />}
        keyExtractor={( index) => index.toString()}
        style={styles.fetchedItemsList}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
      />
    )}
  </View>
);

export default CardCourse;
