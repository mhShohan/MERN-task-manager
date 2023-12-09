import { Router } from 'express';
import validateRequestZod from '../../middleware/validateRequestZod';
import teamController from './team.controller';
import teamValidator from './team.validator';

const teamRoutes = Router();

teamRoutes.post(
  '/',
  validateRequestZod(teamValidator.createTeamSchema),
  teamController.createTeam,
);
teamRoutes.delete('/:id', teamController.deleteTeam);

teamRoutes.post(
  '/:id',
  validateRequestZod(teamValidator.updateTeamSchema),
  teamController.updateTeam,
);

export default teamRoutes;
