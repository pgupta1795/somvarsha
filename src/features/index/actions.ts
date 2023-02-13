import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { FUND_CATEGORIES_URL } from '../../api/axios';
import { IndexState } from './initialState';

export const fetchIndexes = createAsyncThunk('index/fetchIndexes', async () => {
  const response = await axios.get(FUND_CATEGORIES_URL);
  return response.data;
});

export const extraReducers = (
  builders: ActionReducerMapBuilder<IndexState>
) => {
  builders.addCase(fetchIndexes.pending, (state) => {
    state.status = 'loading';
  });
  builders.addCase(fetchIndexes.fulfilled, (state, { payload }) => {
    state.status = 'succeeded';
    state.indexes = payload;
  });
  builders.addCase(fetchIndexes.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.error.message;
    console.error(action.error.message);
  });
};
