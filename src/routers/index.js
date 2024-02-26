import { Router } from 'express';
import SchoolRouter from './schools/index.js';
import UserRouter from './users/index.js';

const router = Router();

router.use('schools', SchoolRouter);
router.use('users', UserRouter);

export default router;
