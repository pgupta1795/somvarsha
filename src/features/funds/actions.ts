import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import axios, {
  ALL_MUTUAL_FUNDS_URL,
  FUND_CATEGORIES_URL,
} from '../../api/axios';
import type { RootState } from '../../app/store';
import { FundsState } from './initialState';

export const fetchCategories = createAsyncThunk(
  'funds/fetchCategories',
  async () => {
    const response = await axios.get(FUND_CATEGORIES_URL);
    return response.data;
  }
);

export const searchMutualFunds = createAsyncThunk(
  'funds/searchMutualFunds',
  async (_, thunkApi) => {
    const state = thunkApi.getState() as RootState;
    const { params: initialParams } = state.funds;
    const params = JSON.parse(JSON.stringify(initialParams));
    const url = `${ALL_MUTUAL_FUNDS_URL}?${new URLSearchParams({
      ...params,
      tags: params.tags.toLowerCase() === 'root' ? '' : params.tags,
      category: params.category.toLowerCase() === 'all' ? '' : params.category,
    }).toString()}`;
    const response = await axios.get(url);
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
  builders.addCase(searchMutualFunds.pending, (state) => {
    state.status = 'loading';
  });
  builders.addCase(searchMutualFunds.fulfilled, (state, { payload }) => {
    state.status = 'succeeded';
    state.mutualFunds = payload.data.funds;
  });
  builders.addCase(searchMutualFunds.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.error.message;
    console.error(action.error.message);
  });
};
