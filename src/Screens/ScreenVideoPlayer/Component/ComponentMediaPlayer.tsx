import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Video, {OnProgressData} from 'react-native-video';
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation-locker';
import {
  heightPercentageToDP as hp,
} from '../../../utils/Dimensions';
import {
  ForwardButton,
  BackButton,
  PlayButton,
  PauseButton,
  MinimiseButton,
  FullScreenButton,
} from '../../../Assets/constants';
import styles from './StylesMediaPlayer';
import { VolumeManager } from 'react-native-volume-manager';
import VerticalSlider from 'rn-vertical-slider-matyno';
const MediaPlayer: React.FC<{videoUri: string}> = ({videoUri}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(true);
  const [progress, setProgress] = useState<{
    currentTime: number;
    seekableDuration: number;
  }>({
    currentTime: 0,
    seekableDuration: 0,
  });
  const [volume, setVolume] = React.useState(0.5);
  const [videoPressed, setVideoPressed] = useState(false);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState<boolean>(false);
  const videoRef = useRef<any>(null);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const handleProgress = (data: OnProgressData): void => {
    setProgress({
      currentTime: data.currentTime,
      seekableDuration: data.seekableDuration,
    });
  };

  const handleSeek = (time: number): void => {
    videoRef.current?.seek(time);
  };

  const handleVolumeChange = async (value: number) => {
    VolumeManager.showNativeVolumeUI({ enabled: false });
    await VolumeManager.setVolume(value);
    setVolume(value);
    const { volume: currentVolume } = await VolumeManager.getVolume();
    console.log(currentVolume);
};
  const toggleFullScreen = () => {
    if (fullScreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
    setFullScreen(!fullScreen);
  };

  return (
    <View style={fullScreen ? styles.fullScreenContainer : styles.container}>
      <TouchableOpacity
        style={[
          styles.videoContainer,
          {height: fullScreen ? '100%' : hp('25%')},
        ]}
        onPress={() => setClicked(!clicked)}>
        <Video
          paused={paused}
          source={{uri: videoUri}}
          ref={videoRef}
          onProgress={handleProgress}
          volume={volume}
          style={[styles.video, {height: fullScreen ? '100%' : hp('25%')}]}
          resizeMode="contain"
        />
        {clicked && (
          <View style={styles.overlay}>
            <View style={styles.controlsRow}>
              <TouchableOpacity
                onPress={() => handleSeek(progress.currentTime - 10)}>
                <Image source={BackButton} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setPaused(!paused)}>
                <Image
                  source={paused ? PlayButton : PauseButton}
                  style={[styles.icon, styles.playPauseIcon]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSeek(progress.currentTime + 10)}>
                <Image source={ForwardButton} style={styles.icon} />
              </TouchableOpacity>
            </View>
            <View style={styles.volumeSlider}>
                <VerticalSlider
                    value={volume}
                    disabled={false}
                    min={0.1}
                    max={1}
                    onChange={handleVolumeChange}
                    width={3}
                    height={80}
                    step={0.1}
                    borderRadius={2}
                    minimumTrackTintColor={"white"}
                    maximumTrackTintColor={"gray"}
                />
            </View>

            <View style={styles.sliderContainer}>
              <Text style={styles.timeText}>
                {formatTime(progress.currentTime)}
              </Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={progress.seekableDuration}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#FFFFFF"
                value={progress.currentTime}
                onValueChange={handleSeek}
              />
              <Text style={styles.timeText}>
                {formatTime(progress.seekableDuration)}
              </Text>
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
