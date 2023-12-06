export type UserInfo = {
  id: number;
  email: string;
};

export type AuthState = {
  loading: boolean;
  userInfo: UserInfo | null;
  userToken: string | null;
  error?: { message: string | string[] } | null;
};

export type LoginReq = {
  email: string;
  password: string;
};

export type LoginResponse = {
  id: number;
  email: string;
  token: string;
};

export type RegisterReq = {
  email: string;
  password: string;
};
