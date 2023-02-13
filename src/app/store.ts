import { configureStore } from '@reduxjs/toolkit';
import fundsReducer from '../features/funds/fundsSlice';
import indexReducer from '../features/index/indexSlice';
import mobileMenuReducer from '../features/menu/mobileMenuSlice';

const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
    funds: fundsReducer,
    index: indexReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
