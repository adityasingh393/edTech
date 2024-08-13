import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MediaPlayer from "./Component/ComponentMediaPlayer";
import { DownloadButton } from "../../Assets/constants";
import styles from './StyleVideoPlayer';

const VideoPlayer: React.FC = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const handleFullScreenToggle = (fullScreen: boolean) => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mediaPlayerContainer}>
        <MediaPlayer 
          videoUri="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
          onFullScreenToggle={handleFullScreenToggle}
        />
      </View>
      {!isFullScreen && (
        <View style={styles.detailsContainer}>
          <View style={styles.downloadContainer}>
            <TouchableOpacity style={styles.downloadButton}>
              <Image source={DownloadButton} style={styles.downloadIcon} />
              <Text style={styles.downloadText}> PDF</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadText}>Download Video</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.descriptionTitle}>About Course</Text>
          <Text style={styles.descriptionText}>
            Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. 
            When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore!
            In the typical cartoon tradition, he prepares the nasty rodents a comical revenge.
            Licensed under the Creative Commons Attribution license http://www.bigbuckbunny.org.
          </Text>
        </View>
      )}
    </View>
  );
};

export default VideoPlayer;
