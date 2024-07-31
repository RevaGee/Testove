import { apiAuth } from './api.ts';

interface LoginResponse {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  refreshToken: string;
  token: string;
  username: string;
}

interface UserResponse {
  id: number;
  username: string;
}

interface RefreshResponse {
  token: string;
}

export const Apilogin = async (
  username: string,
  password: string,
): Promise<LoginResponse> => {
  const response = await apiAuth.post<LoginResponse>('/auth/login', {
    username,
    password,
    expiresInMins: 30,
  });
  return response.data;
};

export const getCurrentUser = async (token: string): Promise<UserResponse> => {
  const response = await apiAuth.get<UserResponse>('/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const refreshSession = async (
  refreshToken: string,
): Promise<RefreshResponse> => {
  const response = await apiAuth.post<RefreshResponse>('/auth/refresh', {
    refreshToken,
    expiresInMins: 30,
  });
  return response.data;
};
