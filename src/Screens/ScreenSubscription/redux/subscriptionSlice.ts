import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SubscriptionState {
  isSubscribed: boolean;
  planId: number | null;
}

const initialState: SubscriptionState = {
  isSubscribed: false,
  planId: null,
};

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    subscribe: (state, action: PayloadAction<number>) => {
      state.isSubscribed = true;
      state.planId = action.payload;
    },
    unsubscribe: state => {
      state.isSubscribed = false;
      state.planId = null;
    },
  },
});

export const {subscribe, unsubscribe} = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
