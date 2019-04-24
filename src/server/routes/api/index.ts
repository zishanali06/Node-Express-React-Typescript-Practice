import * as express from 'express';
import bookRoutes from './books';
import categoryRoutes from './categories';

const router = express.Router();

router.use('/books', bookRoutes);
router.use('/categories', categoryRoutes);

export default router;