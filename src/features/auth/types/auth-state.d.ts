import { UserInfo } from './user-info';

export type AuthState = {
  loading: boolean;
  userInfo: UserInfo | null;
  userToken: string | null;
  error?: { message: string | string[] } | null;
};
