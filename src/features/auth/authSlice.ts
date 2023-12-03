import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, register } from './authActions.ts';
import type { AuthState, UserInfo } from './types';

const userInfoJson = localStorage.getItem('userInfo');

const initialState: AuthState = {
  error: null,
  loading: false,
  userInfo: userInfoJson ? JSON.parse(userInfoJson) : null,
};

const isLoading = (state: AuthState) => {
  state.loading = true;
  state.error = null;
};

const isFulfilled = (state: AuthState, action: PayloadAction<UserInfo>) => {
  state.loading = false;
  state.userInfo = action.payload;
};

const isRejected = (
  state: AuthState,
  action: PayloadAction<AuthState['error']>,
) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clear(state) {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, isLoading);
    builder.addCase(register.fulfilled, isFulfilled);
    builder.addCase(register.rejected, isRejected);
    builder.addCase(login.pending, isLoading);
    builder.addCase(login.fulfilled, isFulfilled);
    builder.addCase(login.rejected, isRejected);
  },
});

export const { clear } = slice.actions;
export const authReducer = slice.reducer;
