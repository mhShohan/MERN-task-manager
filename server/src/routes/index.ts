import { Router } from 'express';
import userRoutes from '../modules/user/user.routes';

const router = Router();

router.use('/users', userRoutes);

const rootRoutes = router;

export default rootRoutes;
