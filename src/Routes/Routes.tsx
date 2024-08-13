import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import Signup from '../Screens/ScreenSignup/ScreenSignup';
import Login from '../Screens/ScreenLogin/ScreenLogin';
import Home from '../Screens/ScreenHome/ScreenHome';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../Screens/redux/authSlice';
import { subscribe } from '../Screens/ScreenSubscription/redux/subscriptionSlice';
import { ActivityIndicator } from 'react-native';
import { AppStackParamList, AuthStackParamList, RootStackParamList } from '../utils/interfaces/types';
import WelcomePage from '../Screens/ScreenWelcome/ScreenWelcome';
import { db } from '../utils/storage/db';
import ScreenLanding from '../Screens/ScreenLanding/ScreenLanding';

const AuthStack = createStackNavigator<AuthStackParamList>();
const AppStack = createStackNavigator<AppStackParamList>();
const SubStack = createStackNavigator<RootStackParamList>();

const Routes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const isSubscribed = useSelector((state: RootState) => state.subscription.isSubscribed);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('authorisationToken');
        if (token) {
          const currentUser = auth().currentUser;
          if (currentUser) {
          
            db.transaction((txn) => {
              txn.executeSql(
                'SELECT subscribed_plan_id FROM users WHERE uid = ?',
                [currentUser.uid],
                (txn, results) => {
                  if (results.rows.length > 0) {
                    const subscribedPlanId = results.rows.item(0).subscribed_plan_id;
                    if (subscribedPlanId) {
                      dispatch(subscribe(subscribedPlanId)); 
                    }
                  }
                }
              );
            });

            const user = {
              email: currentUser.email!,
              name: currentUser.displayName!,
              phone: '',
              password: '',
            };
            dispatch(setUser(user));
          }
        } else {
          dispatch(setUser(null));
        }
      } catch (error) {
        dispatch(setUser(null));
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, [dispatch]);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppStack.Navigator initialRouteName="Home">
          <AppStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </AppStack.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="Landing">
          <AuthStack.Screen name ="Landing" component={ScreenLanding} options={{ headerShown: false }}/>
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="Signup" component={Signup} />
          
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
