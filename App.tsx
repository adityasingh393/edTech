import React from 'react';
import Routes from './src/Routes/Routes';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
function App(): React.JSX.Element {
  return (
<Provider store={store}>

  <Routes/>
</Provider>

  );
}

export default App;