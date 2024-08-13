import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Screens/redux/authSlice';
import subscriptionReducer from '../Screens/ScreenSubscription/redux/subscriptionSlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    subscription: subscriptionReducer, 
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
