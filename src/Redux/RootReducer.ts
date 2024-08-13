import { combineReducers } from 'redux';
import homeReducer from '../Screens/ScreenHome/Redux/Slices/HomeSlice';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
