import { Router } from 'express';
import userController from './user.controllers';
import validateRequestZod from '../../middleware/validateRequestZod';
import userValidator from './user.validator';

const userRoutes = Router();

userRoutes.post(
  '/register',
  validateRequestZod(userValidator.validateToCreate),
  userController.register,
);
userRoutes.get('/', userController.getAll);
userRoutes.get('/:id', userController.getSingleUser);
userRoutes.post(
  '/login',
  validateRequestZod(userValidator.validateToLogin),
  userController.login,
);

export default userRoutes;
