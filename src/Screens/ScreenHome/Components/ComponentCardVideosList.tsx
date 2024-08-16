import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { CardData, FetchedItemProps, ScreenVideoNavigationProp } from '../Utils/Types';
import { styles } from './StylsCardCourse';
import { ScreenLandingNavigationProp } from '../../ScreenLanding/utils/types';

const FetchedItem: React.FC<FetchedItemProps> = ({ item}) => {
  const navigation = useNavigation<ScreenVideoNavigationProp>();

  const handlePress = () => {
    navigation.navigate('Video'); 
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.fetchedDataContainer}>
        <Image source={{ uri: item.thumbnailUrl }} style={styles.thumbnail} />
        <View style={styles.fetchedTextContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>Duration: {item.duration}</Text>
          <Text style={styles.text}>Views: {item.views}</Text>
        </View>
      </View>
     </TouchableOpacity>
  );
};

export default FetchedItem;

