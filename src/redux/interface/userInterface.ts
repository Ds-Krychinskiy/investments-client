export interface UserRegistrationProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserProps {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  country: string;
  role: string;
  tarrif: string;
  percent: string;
}

export interface UserAuthorizationProps {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: UserProps;
}
