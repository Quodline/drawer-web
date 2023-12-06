import { AxiosError } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { axiosInstance } from '@/app/axios-instance';
import type { LoginReq, RegisterReq } from './auth';
import { clear, fulfilled, loading, rejected } from './authSlice';
import { AppThunk } from '@/app/store';

const apiAuth =
  (endPoint: string) =>
  (reqBody: RegisterReq | LoginReq): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading());
      const { data } = await axiosInstance.post(endPoint, reqBody);
      localStorage.setItem('userInfo', JSON.stringify(data));
      dispatch(fulfilled(data));
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        dispatch(rejected(error.response.data));
      } else throw error;
    }
  };

export const register = apiAuth('auth/signup');
export const login = apiAuth('auth/signin');
export const logout =
  (navigate: NavigateFunction): AppThunk =>
  (dispatch) => {
    localStorage.removeItem('userInfo');
    navigate('/auth');
    dispatch(clear());
  };
