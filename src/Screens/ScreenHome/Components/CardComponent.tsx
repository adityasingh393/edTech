// Card.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { styles } from './CardStyle';

export interface CardContainerProps {
  Images: ImageSourcePropType;
  CourseTitle: string;
}

export interface CardData {
  CourseDescription: string;
  NoOfEnrollments: number;
}

const Card: React.FC<CardContainerProps & CardData> = ({ Images, CourseTitle, CourseDescription, NoOfEnrollments }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={Images} style={styles.image} />
      <Text style={styles.title}>{CourseTitle}</Text>
      <Text style={styles.description}>{CourseDescription}</Text>
      <Text style={styles.enrollments}>Enrollments: {NoOfEnrollments}</Text>
    </View>
  );
};


export default Card;
