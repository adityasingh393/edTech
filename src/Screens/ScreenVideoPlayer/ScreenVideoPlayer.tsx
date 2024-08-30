import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MediaPlayer from './Component/ComponentMediaPlayer';
import { downloadVideo } from '../utils/storage/storageFunctions';
import { DownloadButton } from '../../Assets/constants';
import styles from './StyleVideoPlayer';
import { VideosScreenProps } from '../../utils/interfaces/types';
import { downloadPdf } from '../utils/storage/pdfDownloadFucntion';
import NavbarComponent from '../../CommonComponents/NavbarComponent';

const VideoPlayer: React.FC<VideosScreenProps> = ({ navigation, route }) => {
  const { videoUri, title, contentId, thumbnailUrl, description } = route.params;

  const handleDownloadPdf = async () => {
    await downloadPdf();
  };
  return (
    <View style={styles.container}>
      <NavbarComponent/>
      <View style={styles.mediaPlayerContainer}>
        <MediaPlayer videoUri={videoUri} canDownload={true}
          contentId={contentId}  
          title={title}
          thumbnailUrl={thumbnailUrl} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.downloadContainer}>
          <LinearGradient
            colors={['#C72FF8', '#6177EE', '#6177EE']}
            start={{ x: 0.9, y: -0.3 }}
            style={styles.downloadButton}
          >
            <TouchableOpacity onPress={handleDownloadPdf}>
              <View style={styles.buttonContent}>
                <Image source={DownloadButton} style={styles.downloadIcon} />
                <Text style={styles.downloadText}>PDF</Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        
        </View>
        <Text style={styles.descriptionTitle}>About Course</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>

    </View>
  );
};

export default VideoPlayer;
