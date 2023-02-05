import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { FUND_CATEGORIES_URL } from '../../api/axios';
import { FundsState } from './initialState';

export const fetchCategories = createAsyncThunk(
  'actions/fetchCategories',
  async () => {
    const response = await axios.get(FUND_CATEGORIES_URL);
    return response.data;
  }
);

export const extraReducers = (
  builders: ActionReducerMapBuilder<FundsState>
) => {
  builders.addCase(fetchCategories.pending, (state) => {
    state.status = 'loading';
  });
  builders.addCase(fetchCategories.fulfilled, (state, { payload }) => {
    state.status = 'succeeded';
    state.categories = payload;
  });
  builders.addCase(fetchCategories.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.error.message;
    console.error(action.error.message);
  });
};
