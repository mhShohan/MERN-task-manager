import { Router } from 'express';
import validateRequestZod from '../../middleware/validateRequestZod';
import teamController from './team.controller';
import teamValidator from './team.validator';

const teamRoutes = Router();

teamRoutes.post('/', validateRequestZod(teamValidator.createTeamSchema), teamController.createTeam)

export default teamRoutes;
