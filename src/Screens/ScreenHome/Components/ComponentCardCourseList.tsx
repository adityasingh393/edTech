import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import { CardContainerProps } from '../Utils/Types';
import { cardsData } from '../Utils/Constants';
import { styles } from './StylsCardCourse';

const HardcodedCardList: React.FC = () => {
  const renderItem = ({ item }: { item: CardContainerProps }) => (
    <View style={styles.CardCoursecontainer}>
      <Image source={item.Images} style={styles.CardCourseImage} />
      <Text style={styles.CardCourseTitle}>{item.CourseTitle}</Text>
      <Text style = {styles.CardDescriptionHeading}>Description :</Text>
      <Text style={styles.CardCourseDescription}> {item.CourseDescription}</Text>
      
      <Text style = {styles.CardEnrollmentHeading}>Enrollments :</Text>

      <Text style={styles.CardCourseEnrollments}> {item.NoOfEnrollments}</Text>
     
    </View>
  );

  return (
    <FlatList
      data={cardsData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      snapToAlignment="center"
      decelerationRate="fast"
    />
  );
};

export default HardcodedCardList;
