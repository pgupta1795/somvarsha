import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

const initialState = { isMenuOpen: false };

export const mobileMenuSlice = createSlice({
  name: 'mobileMenu',
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.isMenuOpen = action.payload;
    },
  },
});

export const { setMenu } = mobileMenuSlice.actions;

export const isMenuOpen = (state: RootState) => state.mobileMenu.isMenuOpen;

export default mobileMenuSlice.reducer;
