import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { subscribe, unsubscribe } from '../Screens/ScreenSubscription/redux/subscriptionSlice';
import { db } from '../utils/storage/db';

export const useSubscriptionCheck = (uid: string | null) => {
  const [checkingSubscription, setCheckingSubscription] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (uid) {
      setCheckingSubscription(true);
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
            }
            setCheckingSubscription(false);
          }
        );
      });
    }
  }, [uid, dispatch]);

  return checkingSubscription;
};
