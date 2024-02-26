import { Router } from 'express';
import NewsRouter from './news/index.js';
import NewsMembershipRouter from './news-membership/index.js';
import PageRouter from './pages/index.js';

const router = Router();

router.use('/:schoolId/news', NewsRouter);
router.use('/:schoolId/newsMembership', NewsMembershipRouter);
router.use('/:schoolId/pages', PageRouter);

export default router;
