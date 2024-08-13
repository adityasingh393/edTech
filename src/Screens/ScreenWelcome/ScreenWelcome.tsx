import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Modal } from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/interfaces/types';
import { styles } from './StylesWelcome';

type WelcomePageNavigationProp = StackNavigationProp<RootStackParamList, 'ScreenSubscription'>;

const WelcomePage = () => {
  const [videoVisible, setVideoVisible] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const navigation = useNavigation<WelcomePageNavigationProp>();

  const handleVideoPress = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setVideoVisible(true);
  };

  const handleSubscriptionPress = () => {
    navigation.navigate('ScreenSubscription');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our Service</Text>
      <Text style={styles.text}>
        Subscribe to our service to access exclusive content and premium features!
      </Text>

      <TouchableOpacity style={styles.subscribeButton} onPress={handleSubscriptionPress}>
        <Text style={styles.subscribeButtonText}>Subscribe Now</Text>
      </TouchableOpacity>

      <Text style={styles.subTitle}>Demo Videos</Text>

      <TouchableOpacity style={styles.videoButton} onPress={() => handleVideoPress('https://www.w3schools.com/html/mov_bbb.mp4')}>
        <Text style={styles.videoButtonText}>Watch Demo Video 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.videoButton} onPress={() => handleVideoPress('https://www.w3schools.com/html/mov_bbb.mp4')}>
        <Text style={styles.videoButtonText}>Watch Demo Video 2</Text>
      </TouchableOpacity>

      <Modal visible={videoVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setVideoVisible(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          {selectedVideo && (
            <Video
              source={{ uri: selectedVideo }}
              style={styles.video}
              controls={true}
              onError={(error) => {
                console.error("Video Error:", error);
                Alert.alert('Error', 'Failed to load video');
              }}
            />
          )}
        </View>
      </Modal>
    </View>
  );
};



export default WelcomePage;
