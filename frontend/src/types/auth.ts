export interface User {
  id?: string;
  name: string;
  email: string;
  role?: 'USER' | 'ADMIN';
}

export interface AuthResponse {
  token: string;
  name: string;
  email: string;
  role?: 'USER' | 'ADMIN';
}
