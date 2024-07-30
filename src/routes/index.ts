import { Router } from 'express';
import documentFormatterRoutes from './doucmentFormatter.routes'
const router = Router();


router.use('/api/resume', documentFormatterRoutes);

export default router;

