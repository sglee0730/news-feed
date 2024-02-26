import { Router } from 'express';
import { PageService } from '../../../services/index.js';

const router = Router();

router.get('/', (req, res, next) => {
  const schoolId = req.params.schoolId;

  try {
    return PageService.getPage(schoolId);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

router.post('/', (req, res, next) => {
  const schoolId = req.params.schoolId;
  const userId = res.locals.userId;
  const body = req.body;

  try {
    return PageService.createPage(body, schoolId, userId);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

router.put('/', (req, res, next) => {
  const schoolId = req.params.schoolId;
  const userId = res.locals.userId;
  const body = req.body;

  try {
    return PageService.updatePage(body, schoolId, userId);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

router.delete('/', (req, res, next) => {
  const schoolId = req.params.schoolId;
  const userId = res.locals.userId;

  try {
    return PageService.deletePage(schoolId, userId);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

export default router;
