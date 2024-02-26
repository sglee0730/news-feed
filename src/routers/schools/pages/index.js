import { Router } from 'express';
import { PageService } from '../../../services/index.js';
import { checkBody } from '../../../middlewares/index.js';
import dto from './dto.js';

const router = Router();

router.get('/', async (req, res, next) => {
  const userId = res.locals.userId;

  try {
    const pages = await PageService.getSubscribedPages(userId);

    return res.json(pages);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

router.post('/', [checkBody(dto)], async (req, res, next) => {
  const schoolId = req.params.schoolId;
  const userId = res.locals.userId;
  const body = req.body;

  try {
    const page = await PageService.createPage(body, schoolId, userId);

    return res.json(page);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

router.put('/', [checkBody(dto)], async (req, res, next) => {
  const schoolId = req.params.schoolId;
  const userId = res.locals.userId;
  const body = req.body;

  try {
    const page = await PageService.updatePage(body, schoolId, userId);

    return res.status(201).json(page);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

router.delete('/', async (req, res, next) => {
  const schoolId = req.params.schoolId;
  const userId = res.locals.userId;

  try {
    await PageService.deletePage(schoolId, userId);

    return res.status(204).send();
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

export default router;
