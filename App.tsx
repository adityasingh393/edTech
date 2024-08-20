import React, { useEffect } from 'react';
import Routes from './src/Routes/Routes';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import { createTables } from './src/utils/storage/db';
import { StatusBar } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
function App(): React.JSX.Element {


  useEffect(() => {
    GoogleSignin.configure({
    offlineAccess:true,
    webClientId: '565978315125-fafv1cnccofkjm1r7fe4lok2r7oseqti.apps.googleusercontent.com',
    });
    }, []);
    
  <StatusBar translucent backgroundColor= 'transparent' barStyle="light-content" />


  useEffect(() => {
    createTables();
  }, []);

  return (
    
<Provider store={store}>
  <Routes/>
</Provider>

  );
}

export default App;