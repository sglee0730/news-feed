import { Router } from 'express';
import { NewsService } from '../../../services/index.js';
import { checkBody } from '../../../middlewares/index.js';
import dto from './dto.js';

const router = Router();

router.post('/', [checkBody(dto)], async (req, res, next) => {
  const schoolId = req.params.schoolId;
  const userId = res.locals.userId;
  const body = req.body;

  try {
    const news = await NewsService.createNews(body, schoolId, userId);

    return res.json(news);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

router.put('/', [checkBody(dto)], async (req, res, next) => {
  const schoolId = req.params.schoolId;
  const newsId = req.params.newsId;
  const userId = res.locals.userId;
  const body = req.body;

  try {
    const news = await NewsService.updateNews(body, schoolId, newsId, userId);

    return res.status(201).json(news);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

router.delete('/', async (req, res, next) => {
  const schoolId = req.params.schoolId;
  const newsId = req.params.newsId;
  const userId = res.locals.userId;

  try {
    await NewsService.deleteNews(schoolId, newsId, userId);

    return res.status(204).send();
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

export default router;
