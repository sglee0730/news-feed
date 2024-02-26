import { Router } from 'express';
import FeedRouter from './feeds/index.js';
import NewsMembershipRouter from './news-memberships/index.js';

const router = Router();

router.use('/:userId/feeds', FeedRouter);
router.use('/:userId/newsMemberships', NewsMembershipRouter);

export default router;
