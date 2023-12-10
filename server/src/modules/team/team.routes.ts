import { Router } from 'express';
import validateRequestZod from '../../middleware/validateRequestZod';
import teamController from './team.controller';
import teamValidator from './team.validator';
import verifyAuth from '../../middleware/verifyAuth';

const teamRoutes = Router();

teamRoutes.post(
  '/',
  verifyAuth,
  validateRequestZod(teamValidator.createTeamSchema),
  teamController.createTeam,
);
teamRoutes.delete('/:id', verifyAuth, teamController.deleteTeam);
teamRoutes.get('/self-teams', verifyAuth, teamController.GetAllTeam);

teamRoutes.patch(
  '/:id',
  verifyAuth,
  validateRequestZod(teamValidator.updateTeamSchema),
  teamController.updateTeam,
);

export default teamRoutes;
