import { Router } from 'express';
import userController from './user.controllers';
import validateRequestZod from '../../middleware/validateRequestZod';
import userValidator from './user.validator';
import verifyAuth from '../../middleware/verifyAuth';

const userRoutes = Router();

userRoutes.post('/register', validateRequestZod(userValidator.validateToCreate), userController.register);
userRoutes.get('/self', verifyAuth, userController.getSelf);
userRoutes.get('/authVerify', verifyAuth, userController.authVerification);
userRoutes.get('/:id', userController.getSingleUser);
userRoutes.get('/', userController.getAll);
userRoutes.post('/login', validateRequestZod(userValidator.validateToLogin), userController.login);

export default userRoutes;
