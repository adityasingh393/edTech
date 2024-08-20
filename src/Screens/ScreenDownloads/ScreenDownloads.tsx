import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import MediaPlayer from '../ScreenVideoPlayer/Component/ComponentMediaPlayer';
import { fetchDownloadedVideos, deleteVideo } from '../utils/storage/storageFunctions';
import styles from './StylesDownload';
import NavbarComponent from '../CommonComponents/NavbarComponent';

const DownloadedVideosScreen: React.FC = () => {
  const [downloadedVideos, setDownloadedVideos] = useState<any[]>([]);

  useEffect(() => {
    loadDownloadedVideos();
  }, []);

  const loadDownloadedVideos = async () => {
    const videos = await fetchDownloadedVideos();
    setDownloadedVideos(videos);
  };

  const handleDeleteVideo = (contentId: string) => {
    deleteVideo(contentId).then(() => {
      loadDownloadedVideos();
    }).catch(() => {
      Alert.alert("Error", "Failed to delete video.");
    });
  };

  return (
    <View style={styles.container}>
                    <NavbarComponent/>

      {downloadedVideos.length === 0 ? (
        <Text style={styles.noVideosText}>No videos downloaded</Text>
      ) : (
        <FlatList
          data={downloadedVideos}
          keyExtractor={(item) => item.contentId}
          renderItem={({ item }) => (
            <View style={styles.videoItem}>
              <Text style={styles.videoTitle}>{item.title}</Text>
              <MediaPlayer videoUri={item.videoPath} onFullScreenToggle={() => {}} />
              <View style={styles.actionsContainer}>
                <TouchableOpacity onPress={() => handleDeleteVideo(item.contentId)}>
                  <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>

              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default DownloadedVideosScreen;
