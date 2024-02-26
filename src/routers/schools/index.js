import { Router } from 'express';
import NewsRouter from './news/index.js';
import PageRouter from './pages/index.js';

const router = Router();

router.use('news', NewsRouter);
router.use('pages', PageRouter);

router.get('/', (req, res, next) => {
    
});

export default router;
