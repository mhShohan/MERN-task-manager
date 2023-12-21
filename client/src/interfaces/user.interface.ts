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
  address?: IAddress;
  links?: ISocialLinks;
}

export interface IUserLogin {
  email: string;
  password: string;
}
