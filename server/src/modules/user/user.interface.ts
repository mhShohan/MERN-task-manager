export interface ISocialLinks {
  github?: string;
  linkendin?: string;
  facebook?: string;
  twitter?: string;
}

export interface IAddress {
  city: string;
  country: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate?: string;
  title?: string;
  description?: string;
  avatar?: string;
  status: 'ACTIVE' | 'BLOCK';
  address?: IAddress;
  links?: ISocialLinks;
}
