import { Router } from 'express';
import SchoolRouter from './schools/index.js';
import UserRouter from './users/index.js';
import { checkUser } from '../middlewares/index.js';

const router = Router();
router.use(checkUser);
router.use('schools', SchoolRouter);
router.use('users', UserRouter);

export default router;
