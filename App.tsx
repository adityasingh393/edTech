import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import Routes from './src/Routes/Routes';
import { createTables } from './src/utils/storage/db';
import { StatusBar } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import SplashScreen from './src/Screens/ScreenSplash/SplashScreen';


function App(): React.JSX.Element {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    GoogleSignin.configure({
      offlineAccess: true,
      webClientId: '565978315125-fafv1cnccofkjm1r7fe4lok2r7oseqti.apps.googleusercontent.com',
    });
  }, []);

  useEffect(() => {
    createTables();
  }, []);

 
  const handleSplashTimeout = () => {
    setShowSplash(false);
  };

  return (
    <Provider store={store}>
      <StatusBar translucent backgroundColor='transparent' barStyle="light-content" />
      {showSplash ? (
        <SplashScreen onTimeout={handleSplashTimeout} />
      ) : (
        <Routes />
      )}
    </Provider>
  );
}

export default App;
