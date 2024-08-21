import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribe, unsubscribe } from '../Screens/ScreenSubscription/redux/subscriptionSlice';
import { db } from '../utils/storage/db';
import { RootState } from '../Redux/store';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const useSubscriptionCheck = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const currentUser = auth().currentUser;
        const googleUser = await GoogleSignin.getCurrentUser();
          
        let uid: string | null = null;

        if (currentUser) {
          uid = currentUser.uid;
        } else if (googleUser) {
          uid = googleUser.user.id;
        }

        if (uid) {
          db.transaction((txn) => {
            txn.executeSql(
              'SELECT subscribed_plan_id FROM users WHERE uid = ?',
              [uid],
              (txn, results) => {
                if (results.rows.length > 0) {
                  const subscribedPlanId = results.rows.item(0).subscribed_plan_id;
                  if (subscribedPlanId) {
                    dispatch(subscribe(subscribedPlanId));
                  } else {
                    dispatch(unsubscribe());
                  }
                } else {
                 
                  dispatch(unsubscribe());
                }
                setIsLoading(false);
              },
              (error) => {
                
                dispatch(unsubscribe());
                setIsLoading(false);
              }
            );
          });
        } else {
          dispatch(unsubscribe());
          setIsLoading(false);
        }
      } catch (error) {
        dispatch(unsubscribe());
        setIsLoading(false);
      }
    };

    if (isAuthenticated) {
      checkSubscription();
    } else {
      setIsLoading(false);
    }
  }, [dispatch, isAuthenticated]);

  return isLoading;
};
