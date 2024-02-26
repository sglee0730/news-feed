import { Router } from 'express';
import { NewsMembershipService } from '../../../../services/index.js';

const router = Router();

router.post('/', async (req, res, next) => {
  const schoolId = req.params.schoolId;
  const newsId = req.params.newsId;
  const userId = res.locals.userId;

  try {
    const newsMembership = await NewsMembershipService.createNewsMembership(
      schoolId,
      newsId,
      userId,
    );

    return res.json(newsMembership);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

router.delete('/:newsMembershipId', async (req, res, next) => {
  const schoolId = req.params.schoolId;
  const newsId = req.params.newsId;
  const newsMembershipId = req.params.newsMembershipId;
  const userId = res.locals.userId;

  try {
    await NewsMembershipService.deleteNewsMembership(
      schoolId,
      newsId,
      newsMembershipId,
      userId,
    );

    return res.status(204).send();
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

export default router;
