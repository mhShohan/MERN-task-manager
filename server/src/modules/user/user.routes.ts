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
userRoutes.get('/:id', userController.getSingleUser)

export default userRoutes;
