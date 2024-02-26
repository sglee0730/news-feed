import { Router } from 'express';
import { NewsService } from '../../../services/index.js';
import { checkBody } from '../../../middlewares/index.js';
import dto from './dto.js';

const router = Router();

router.post('/', [checkBody(dto)], (req, res, next) => {
  const schoolId = req.params.schoolId;
  const userId = res.locals.userId;
  const body = req.body;

  try {
    return NewsService.createNews(body, schoolId, userId);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

router.put('/', [checkBody(dto)], (req, res, next) => {
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
