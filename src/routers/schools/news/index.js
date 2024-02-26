import { Router } from 'express';
import { NewsService } from '../../../services/index.js';

const router = Router();

router.post('/', (req, res, next) => {
  const schoolId = req.params.schoolId;
  const userId = res.locals.userId;
  const body = req.body;

  try {
    return NewsService.createNews(body, schoolId, userId);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

router.put('/', (req, res, next) => {
  const schoolId = req.params.schoolId;
  const newsId = req.params.newsId;
  const userId = res.locals.userId;
  const body = req.body;

  try {
    return NewsService.updateNews(body, schoolId, newsId, userId);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

router.delete('/', (req, res, next) => {
  const schoolId = req.params.schoolId;
  const newsId = req.params.newsId;
  const userId = res.locals.userId;

  try {
    return NewsService.deleteNews(schoolId, newsId, userId);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

export default router;
