import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { extraReducers } from './actions';
import initialState from './initialState';

export const fundsSlice = createSlice({
  name: 'funds',
  initialState,
  reducers: {},
  extraReducers,
});

export const getStatus = (state: RootState) => state.funds.status;

export const getError = (state: RootState) => state.funds.error;

export const getCategories = (state: RootState) => state.funds.categories;

export default fundsSlice.reducer;
