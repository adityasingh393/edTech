import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { CardData, FetchedItemProps, ScreenVideoNavigationProp } from '../Utils/Types';
import { styles } from './StylsCardCourse';
import DurationIcon from '../../../Assets/ImagesData.tsx/Durationlogo';
import EyeIcon from '../../../Assets/ImagesData.tsx/EyeIcon'; 

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
          <View style={styles.durationContainer}>
            <DurationIcon width={13} height={15} />
            <Text style={styles.text}> {item.duration}</Text>
          </View>
          <View style={styles.viewsContainer}>
            <EyeIcon width={20} height={27} />
            <Text style={styles.text}> {item.views}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FetchedItem;
