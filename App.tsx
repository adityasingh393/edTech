import React, { useEffect } from 'react';
import Routes from './src/Routes/Routes';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import { createTables } from './src/utils/storage/db';
import { StatusBar } from 'react-native';
function App(): React.JSX.Element {
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