import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchDataRequest } from './Redux/Slices/HomeSlice';
import CombinedCardList from './Components/CombinedCardList';
import NavbarComponent from '../CommonComponents/NavbarComponent';
import { styles } from './StylesHome';
import Header from './Components/ComponentHeader';
import CardList from './Components/ComponentCardVideosList';
import MediaPlayer from '../ScreenVideoPlayer/Component/ComponentMediaPlayer';
import VideoPlayer from '../ScreenVideoPlayer/ScreenVideoPlayer';
import { VideosScreenProps } from '../../utils/interfaces/types';
import HardcodedCardList from './Components/ComponentCardCourseList';
import { FullScreenButton } from '../../Assets/constants';

const HomeScreen: React.FC<VideosScreenProps> = ({navigation, route}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <View style={styles.container}>
     
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      {/* <Header/>
      <CombinedCardList /> */}
      {/* <Header />
      < HardcodedCardList/>
      <CardList /> 
   */}
   {/* <MediaPlayer videoUri='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' onFullScreenToggle={FullScreenButton}/> */}
      <VideoPlayer navigation={navigation} route={route}/>
    </View>
  );
};

export default HomeScreen;
