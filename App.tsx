import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SaveVideoComponent from './src/Screens/ScreenHistory/SaveVideoComponent';
import WatchlistScreen from './src/Screens/ScreenHistory/WatchlistScreen';

type RootStackParamList = {
  SaveVideo: undefined;
  WatchlistScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SaveVideo">
        <Stack.Screen name="SaveVideo" component={SaveVideoComponent} />
        <Stack.Screen name="WatchlistScreen" component={WatchlistScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
