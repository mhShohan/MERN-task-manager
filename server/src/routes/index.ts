import { Router } from 'express';
import userRoutes from '../modules/user/user.routes';
import teamRoutes from '../modules/team/team.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/teams', teamRoutes);

const rootRoutes = router;

export default rootRoutes;
