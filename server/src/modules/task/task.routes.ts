import { Router } from 'express';

const router = Router();

router.use('/', (req, res) => {
    res.json({ message: 'hello' });
});

const taskRoutes = router;

export default taskRoutes;
