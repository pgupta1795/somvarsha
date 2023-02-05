import { configureStore } from '@reduxjs/toolkit';
import fundsReducer from '../features/funds/fundsSlice';
import mobileMenuReducer from '../features/menu/mobileMenuSlice';

const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
    funds: fundsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
