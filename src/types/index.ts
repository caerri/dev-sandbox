export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'developer' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  role: 'admin' | 'developer' | 'user';
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
  role?: 'admin' | 'developer' | 'user';
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface Sandbox {
  id: string;
  name: string;
  description: string;
  technology: string;
  url: string;
  status: 'active' | 'inactive' | 'development';
  githubUrl?: string;
  deployedUrl?: string;
}