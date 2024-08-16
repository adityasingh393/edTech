import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Alert, ScrollView } from 'react-native';
import Video from 'react-native-video';
import { styles } from '../StylesWelcome';

const DemoVideoSection = () => {
  const [videoVisible, setVideoVisible] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoPress = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setVideoVisible(true);
  };

  return (
    <View>
      <ScrollView contentContainerStyle={styles.videoCardContainer}>
        <TouchableOpacity
          style={styles.videoCard}
          onPress={() => handleVideoPress('https://www.w3schools.com/html/mov_bbb.mp4')}
        >
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
            }}
            style={styles.thumbnail}
          />
          <Text style={styles.videoButtonText}>Watch Demo Video 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.videoCard}
          onPress={() => handleVideoPress('https://www.w3schools.com/html/mov_bbb.mp4')}
        >
          <Image
            source={{ uri: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp' }}
            style={styles.thumbnail}
          />
          <Text style={styles.videoButtonText}>Watch Demo Video 2</Text>
        </TouchableOpacity>
      </ScrollView>

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
                console.error('Video Error:', error);
                Alert.alert('Error', 'Failed to load video');
              }}
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

export default DemoVideoSection;
