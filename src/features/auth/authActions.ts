import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import type { LoginReq } from '@/types/auth/login-req';
import { axiosInstance } from '@/lib/axios-instance.ts';
import type { AuthState } from '@/types/auth/auth-state';
import { UserInfo } from '@/types/auth/user-info';

type IThunkApi = {
  rejectValue: AuthState['error'];
};

export const register = createAsyncThunk<UserInfo, LoginReq, IThunkApi>(
  'auth/register',
  async (reqBody: LoginReq, { rejectWithValue }) => {
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
  'auth/login',
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
