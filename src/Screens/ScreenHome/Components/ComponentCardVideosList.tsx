import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FetchedItemProps, ScreenVideoNavigationProp } from '../Utils/Types';
import { styles } from './StylsCardCourse';

const FetchedItem: React.FC<FetchedItemProps> = ({ item }) => {
  const navigation = useNavigation<ScreenVideoNavigationProp>();

  const handlePress = () => {
    navigation.navigate('Video', { 
      videoUri: item.videoUrl,
      title: item.title,
      contentId: item.id,
      thumbnailUrl: item.thumbnailUrl,
      description: item.description,
    });
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
