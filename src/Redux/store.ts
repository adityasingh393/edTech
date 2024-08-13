import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import authReducer from '../Screens/redux/authSlice';
import subscriptionReducer from '../Screens/ScreenSubscription/redux/subscriptionSlice'; 
import homeReducer from '../Screens/ScreenHome/Redux/Slices/HomeSlice'; 
import { rootEpic } from './RootEpic'; 

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    subscription: subscriptionReducer, 
  }
    home: homeReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:false,
    }).concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

