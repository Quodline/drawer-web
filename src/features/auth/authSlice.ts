import { createSlice } from '@reduxjs/toolkit';
import type { AuthState, LoginResponse } from './types';

const userInfoJson = localStorage.getItem('userInfo');
const userInfo: LoginResponse = userInfoJson ? JSON.parse(userInfoJson) : null;

const initialState: AuthState = {
  error: null,
  loading: false,
  userInfo,
  userToken: userInfo?.token,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clear(state) {
      state.userInfo = null;
      state.userToken = null;
    },
    loading(state) {
      state.loading = true;
      state.error = null;
    },
    fulfilled(state, { payload }) {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.token;
    },
    rejected(state, { payload }) {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { clear, loading, fulfilled, rejected } = slice.actions;
export const authReducer = slice.reducer;
