import express from 'express';

const router = express.Router();

import SiteController from '../app/controllers/SiteController';

const siteController = new SiteController();

router.get('/search', siteController.search);
router.get('/', siteController.index);

export default router;
