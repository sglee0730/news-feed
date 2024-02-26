import { Router } from 'express';
import { FeedService } from '../../../services/index.js';
import limit from '../../../middlewares/limit.js';

const router = Router();

router.get('/', [limit(100)], async (req, res, next) => {
  const userId = res.locals.userId;
  const limit = res.locals.limit;

  try {
    const page = await FeedService.getFeedsByUser(limit, userId);

    return res.json(page);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

export default router;
