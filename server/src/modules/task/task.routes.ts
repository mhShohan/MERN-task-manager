import { Router } from 'express';
import validateRequestZod from '../../middleware/validateRequestZod';
import taskValidator from './task.validator';
import taskController from './task.controller';
import verifyAuth from '../../middleware/verifyAuth';

const taskRoutes = Router();

taskRoutes.use(verifyAuth)

taskRoutes.post('/', validateRequestZod(taskValidator.createSchema), taskController.create)
taskRoutes.get('/', taskController.getAll)
taskRoutes.get('/:id', taskController.getSingle)
taskRoutes.delete('/:id', taskController.remove)
taskRoutes.patch('/:id', validateRequestZod(taskValidator.updateSchema), taskController.remove)


export default taskRoutes;
