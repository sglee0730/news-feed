import { Router } from 'express';
import FeedRouter from './feeds/index.js';
import NewsMembershipRouter from './news-memberships/index.js';

const router = Router();

router.use('feeds', FeedRouter);
router.use('newsMemberships', NewsMembershipRouter);

export default router;
