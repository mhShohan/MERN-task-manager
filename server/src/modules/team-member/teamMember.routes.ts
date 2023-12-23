import { Router } from 'express';
import validateRequestZod from '../../middleware/validateRequestZod';
import teamMemberValidator from './teamMember.validator';
import verifyAuth from '../../middleware/verifyAuth';
import teamMemberController from './teamMember.controller';

const teamMemberRoutes = Router();

teamMemberRoutes.post(
  '/',
  verifyAuth,
  validateRequestZod(teamMemberValidator.addTeamMemberSchema),
  teamMemberController.addTeamMember,
);
teamMemberRoutes.delete('/:id', verifyAuth, teamMemberController.removeTeamMember);

export default teamMemberRoutes;
