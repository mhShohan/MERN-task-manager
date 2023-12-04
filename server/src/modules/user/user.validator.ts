import { z } from 'zod';
import zodMessage from '../../utils/zodMessage';

const validateToCreate = z.object({
  firstName: z.string(zodMessage('firstName')).trim(),
  lastName: z.string(zodMessage('lastName')).trim(),
  email: z.string(zodMessage('email')).email().toLowerCase().trim(),
  password: z
    .string(zodMessage('password'))
    .min(6, { message: 'password must have 6 or more characters' })
    .max(20, { message: 'password must be less then 20 characters' })
    .trim(),
});

const validateToUpdate = z.object({
  firstName: z.string().trim().optional(),
  lastName: z.string().trim().optional(),
  email: z.string().email().toLowerCase().trim().optional(),
  password: z
    .string()
    .min(6, { message: 'password must have 6 or more characters' })
    .max(20, { message: 'password must be less then 20 characters' })
    .trim()
    .optional(),
  birthDate: z.string().optional(),
  title: z.string().trim().optional(),
  description: z.string().trim().optional(),
  avatar: z.string().trim().optional(),
  address: z
    .object({
      city: z.string().trim().optional(),
      country: z.string().trim().optional(),
    })
    .optional(),
  links: z
    .object({
      github: z.string().trim().optional(),
      linkendin: z.string().trim().optional(),
      twitter: z.string().trim().optional(),
    })
    .optional(),
});

const validateToLogin = z.object({
  email: z
    .string(zodMessage('email'))
    .email({ message: 'Must Provide an email!' })
    .trim(),
  password: z.string(zodMessage('password')).trim(),
});

const userValidator = { validateToCreate, validateToUpdate, validateToLogin };

export default userValidator;
