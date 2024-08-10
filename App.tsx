import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenLanding from './src/Screens/ScreenLanding/ScreenLanding';
import ScreenHome from './src/Screens/ScreenHome/ScreenHome';


const Stack = createStackNavigator();


const App: React.FC = () => {
  
  return (
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      initialRouteName="Landing">
          <Stack.Screen name="Landing" component={ScreenLanding} />
          <Stack.Screen name="Home" component={ScreenHome} />

        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;