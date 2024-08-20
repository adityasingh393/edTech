import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { View, ActivityIndicator } from 'react-native';
import { useAuthCheck } from './useAuthCheck';
import { useSubscriptionCheck } from './useSubscriptionCheck';
import Signup from '../Screens/ScreenSignup/ScreenSignup';
import Login from '../Screens/ScreenLogin/ScreenLogin';
import SubscriptionPage from '../Screens/ScreenSubscription/ScreenSubscription';
import DownloadedVideosScreen from '../Screens/ScreenDownloads/ScreenDownloads';
import WelcomePage from '../Screens/ScreenWelcome/ScreenWelcome';
import ScreenLanding from '../Screens/ScreenLanding/ScreenLanding';
import ScreenVideoPlayer from '../Screens/ScreenVideoPlayer/ScreenVideoPlayer';
import HomeScreen from '../Screens/ScreenHome/ScreenHome';
import { AppStackParamList, AuthStackParamList, RootStackParamList } from '../utils/interfaces/types';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const AuthStack = createStackNavigator<AuthStackParamList>();
const AppStack = createStackNavigator<AppStackParamList>();
const SubStack = createStackNavigator<RootStackParamList>();

const Routes = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const isSubscribed = useSelector((state: RootState) => state.subscription.isSubscribed);

  const isLoading = useAuthCheck();

  const currentUser = auth().currentUser;
  const googleUser = GoogleSignin.getCurrentUser();

  const checkingSubscription = useSubscriptionCheck(currentUser?.uid || googleUser?.user.id || null);

  if (isLoading || checkingSubscription) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        isSubscribed ? (
          <AppStack.Navigator initialRouteName="Home">
            <AppStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <AppStack.Screen name="Video" component={ScreenVideoPlayer} options={{ headerShown: false }} />
            <AppStack.Screen name="Downloads" component={DownloadedVideosScreen} options={{ headerTitle: 'Downloads' }} />
          </AppStack.Navigator>
        ) : (
          <SubStack.Navigator initialRouteName="WelcomePageSub">
            <SubStack.Screen name="WelcomePageSub" component={WelcomePage} options={{ headerShown: false }} />
            <SubStack.Screen name="ScreenSubscription" component={SubscriptionPage} options={{ headerShown: false }} />
          </SubStack.Navigator>
        )
      ) : (
        <AuthStack.Navigator initialRouteName="Landing">
          <AuthStack.Screen name="Landing" component={ScreenLanding} options={{ headerShown: false }} />
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="Signup" component={Signup} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
