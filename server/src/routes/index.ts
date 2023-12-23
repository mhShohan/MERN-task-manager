import { Router } from 'express';
import userRoutes from '../modules/user/user.routes';
import teamRoutes from '../modules/team/team.routes';
import teamMemberRoutes from '../modules/team-member/teamMember.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/teams', teamRoutes);
router.use('/members', teamMemberRoutes);

const rootRoutes = router;

export default rootRoutes;
