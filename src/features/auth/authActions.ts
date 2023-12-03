import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { axiosInstance } from '@/app/axios-instance.ts';
import type { AuthState, LoginReq, RegisterReq, UserInfo } from './types';
import { clear } from './authSlice.ts';
import { AppThunk } from '@/app/store.ts';

type IThunkApi = {
  rejectValue: AuthState['error'];
};

export const register = createAsyncThunk<UserInfo, RegisterReq, IThunkApi>(
  'types/register',
  async (reqBody: RegisterReq, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post('auth/signup', reqBody);
      localStorage.setItem('userInfo', JSON.stringify(data));
      return data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return rejectWithValue(error.response.data);
      } else throw error;
    }
  },
);

export const login = createAsyncThunk<UserInfo, LoginReq, IThunkApi>(
  'types/login',
  async (reqBody: LoginReq, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post('auth/signin', reqBody);
      localStorage.setItem('userInfo', JSON.stringify(data));
      return data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return rejectWithValue(error.response.data);
      } else throw error;
    }
  },
);

export const logout = (navigate: NavigateFunction): AppThunk => {
  return (dispatch) => {
    localStorage.removeItem('userInfo');
    navigate('/login');
    dispatch(clear());
  };
};
