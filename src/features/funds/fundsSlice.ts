import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { extraReducers } from './actions';
import initialState from './initialState';

export const fundsSlice = createSlice({
  name: 'funds',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setParams: (state, action) => {
      state.params = { ...state.params, ...action.payload };
    },
  },
  extraReducers,
});

export const { setStatus, setParams } = fundsSlice.actions;

export const getStatus = (state: RootState) => state.funds.status;

export const getError = (state: RootState) => state.funds.error;

export const getCategories = (state: RootState) => state.funds.categories;

export const getParams = (state: RootState) => state.funds.params;

export const getMutualFunds = (state: RootState) => state.funds.mutualFunds;

export default fundsSlice.reducer;
