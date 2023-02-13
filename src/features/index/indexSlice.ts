import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { extraReducers } from './actions';
import initialState from './initialState';

export const indexSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers,
});

export const { setStatus } = indexSlice.actions;

export const getStatus = (state: RootState) => state.index.status;

export const getError = (state: RootState) => state.index.error;

export const getIndexes = (state: RootState) => state.index.indexes;

export default indexSlice.reducer;
