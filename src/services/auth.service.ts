import type { User } from '../types/auth';

export const authService = {
  login(email: string): Promise<{ user: User; token: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = {
          id: '1',
          name: 'Usuário Teste',
          email: email,
        };
        const token = 'fake-jwt-token-12345';
        localStorage.setItem('auth_token', token);
        resolve({ user: mockUser, token });
      }, 1500);
    });
  },
  logout(): void {
    localStorage.removeItem('auth_token');
  }
};
