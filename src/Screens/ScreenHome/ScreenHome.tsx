import React from 'react';
import { View } from 'react-native';
import VideoPlayer from '../ScreenVideoPlayer/ScreenVideoPlayer'; // Import the VideoPlayer component

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <VideoPlayer videoUri="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
    </View>
  );
};

export default App;
