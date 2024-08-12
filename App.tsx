import React from 'react';
import Routes from './src/Routes/Routes';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import { StatusBar } from 'react-native';
function App(): React.JSX.Element {
  <StatusBar translucent backgroundColor= 'transparent' barStyle="light-content" />

  return (
    
<Provider store={store}>
  <Routes/>
</Provider>

  );
}

export default App;