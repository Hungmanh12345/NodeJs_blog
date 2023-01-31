import express from 'express';

const router = express.Router();

import NewsController from '../app/controllers/NewsController';

const newsController = new NewsController();

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

export default router
