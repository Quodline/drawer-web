import { createSlice } from '@reduxjs/toolkit';
import type { AuthState } from './types';

const initialState: AuthState = {
  error: null,
  loading: false,
  userInfo: null,
};

const userInfoJson = localStorage.getItem('userInfo');
initialState.userInfo = userInfoJson ? JSON.parse(userInfoJson) : null;

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clear(state) {
      return Object.assign(state, initialState);
    },
    loading(state) {
      state.loading = true;
      state.error = null;
    },
    fulfilled(state, action) {
      state.loading = false;
      state.userInfo = action.payload;
    },
    rejected(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { clear, loading, fulfilled, rejected } = slice.actions;
export const authReducer = slice.reducer;
