import * as express from 'express';
import apiRoutes from './api';
import authRoutes from './auth';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/api', apiRoutes);

export default router;

