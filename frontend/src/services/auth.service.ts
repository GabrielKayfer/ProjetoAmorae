import type { User, AuthResponse } from '../types/auth';
import { api } from '../api/api';

export const authService = {
  async login(email: string, password?: string): Promise<{ user: User; token: string }> {
    const response = await api.post<AuthResponse>('/auth/login', { email, password });
    const { token, name, email: userEmail } = response.data;

    const user: User = { name, email: userEmail };

    localStorage.setItem('auth_token', token);
    localStorage.setItem('auth_user', JSON.stringify(user));

    return { user, token };
  },
  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
  }
};
