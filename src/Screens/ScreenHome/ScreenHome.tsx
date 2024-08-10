// HomeScreen.tsx
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Card, { CardContainerProps, CardData } from './Components/CardComponent';
import { useNavigation } from '@react-navigation/native';
import { ScreenHomeNavigationProp } from './Utils/Types';
import { cardsData } from './Utils/Constants';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<ScreenHomeNavigationProp>();

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          Images={card.Images}
          CourseTitle={card.CourseTitle}
          CourseDescription={card.CourseDescription}
          NoOfEnrollments={card.NoOfEnrollments}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default HomeScreen;
