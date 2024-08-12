import React from 'react';
import { View, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { saveWatchList, fetchVideoData } from './saveWatchList';

type RootStackParamList = {
  SaveVideo: undefined;
  WatchlistScreen: undefined;
};

type SaveVideoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SaveVideo'
>;

const SaveVideoComponent: React.FC = () => {
  const navigation = useNavigation<SaveVideoScreenNavigationProp>();

  const saveVideo = async () => {
    const videoData = await fetchVideoData();
    console.log("--->",videoData);
    if (videoData) {
      await saveWatchList(videoData, Date.now());
      Alert.alert('Video added to watchlist successfully');
      navigation.navigate('WatchlistScreen');
    } else {
      Alert.alert('Failed to fetch video data');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Save Video" onPress={saveVideo} />
    </View>
  );
};

export default SaveVideoComponent;
