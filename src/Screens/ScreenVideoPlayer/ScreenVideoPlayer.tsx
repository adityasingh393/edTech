import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image, Button } from 'react-native';
import MediaPlayer from './Component/ComponentMediaPlayer';
import { downloadVideo } from '../utils/storage/storageFunctions';
import { DownloadButton } from '../../Assets/constants';
import styles from './StyleVideoPlayer';
import { VideosScreenProps } from '../../utils/interfaces/types';
import { downloadPdf } from '../utils/storage/pdfDownloadFucntion';

const VideoPlayer: React.FC<VideosScreenProps> = ({ navigation, route }) => {
  const { videoUri, title, contentId, thumbnailUrl, description } = route.params;
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const handleFullScreenToggle = (fullScreen: boolean) => {
    setIsFullScreen(fullScreen);
  };

  const handleDownloadPdf = async () => {
    await downloadPdf();
  };

  const handleDownloadVideo = async () => {
    setIsDownloading(true);
    downloadVideo(contentId, videoUri, title, thumbnailUrl, () => {
      setIsDownloading(false);
      Alert.alert("Success", "Video downloaded successfully.");
    }).catch(() => {
      setIsDownloading(false);
      Alert.alert("Error", "Failed to download video.");
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.mediaPlayerContainer}>
        <MediaPlayer
          videoUri={videoUri} 
          onFullScreenToggle={handleFullScreenToggle}
        />
      </View>
      {!isFullScreen && (
        <View style={styles.detailsContainer}>
          <View style={styles.downloadContainer}>
            <TouchableOpacity style={styles.downloadButton} onPress={handleDownloadPdf}>
              <Image source={DownloadButton} style={styles.downloadIcon} />
              <Text style={styles.downloadText}>PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.downloadButton}
              onPress={handleDownloadVideo}
              disabled={isDownloading}
            >
              <Text style={styles.downloadText}>
                {isDownloading ? "Downloading..." : "Download Video"}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.descriptionTitle}>About Course</Text>
          <Text style={styles.descriptionText}>
            {description}
          </Text>
        </View>
      )}
      <Button title="Downloads" onPress={() => navigation.navigate('Downloads')} />
    </View>
  );
};

export default VideoPlayer;
