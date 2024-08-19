import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Video, { OnProgressData } from 'react-native-video';
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation-locker';
import styles from './StylesMediaPlayer';
import { heightPercentageToDP as hp } from '../../../utils/Dimensions';
import { ForwardButton, BackButton, PlayButton, PauseButton, MinimiseButton, FullScreenButton } from '../../../Assets/constants';
import { ProgressState, VideoPlayerProps } from '../utils/interface';

const MediaPlayer: React.FC<VideoPlayerProps> = ({ videoUri, onFullScreenToggle }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<ProgressState>({ currentTime: 0, seekableDuration: 0 });
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const videoRef = useRef<any>(null);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const handleProgress = (data: OnProgressData): void => {
    setProgress({ currentTime: data.currentTime, seekableDuration: data.seekableDuration });
  };

  const handleSeek = (time: number): void => {
    videoRef.current?.seek(time);
  };

  const toggleFullScreen = () => {
    if (fullScreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
    setFullScreen(!fullScreen);
    onFullScreenToggle(!fullScreen); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.videoContainer, { height: fullScreen ? '100%' : hp('25%') }]}
        onPress={() => setClicked(!clicked)}
      >
        <Video
          paused={paused}
          source={{ uri: videoUri }}
          ref={videoRef}
          onProgress={handleProgress}
          volume={1.0}
          style={[styles.video, { height: fullScreen ? '100%' : hp('25%') }]}
          resizeMode="contain"        />
        {clicked && (
          <View style={styles.overlay}>
            <View style={styles.controlsRow}>
              <TouchableOpacity onPress={() => handleSeek(progress.currentTime - 10)}>
                <Image source={BackButton} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setPaused(!paused)}>
                <Image
                  source={paused ? PlayButton : PauseButton}
                  style={[styles.icon, styles.playPauseIcon]}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSeek(progress.currentTime + 10)}>
                <Image source={ForwardButton} style={styles.icon} />
              </TouchableOpacity>
            </View>
            <View style={styles.sliderContainer}>
              <Text style={styles.timeText}>{formatTime(progress.currentTime)}</Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={progress.seekableDuration}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#FFFFFF"
                onValueChange={handleSeek}
              />
              <Text style={styles.timeText}>{formatTime(progress.seekableDuration)}</Text>
            </View>
            <View style={styles.fullScreenToggleContainer}>
              <TouchableOpacity onPress={toggleFullScreen}>
                <Image
                  source={fullScreen ? MinimiseButton : FullScreenButton}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default MediaPlayer;
