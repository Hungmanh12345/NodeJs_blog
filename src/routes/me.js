import express from 'express';

const router = express.Router();

import MeController from '../app/controllers/MeController';

const meController = new MeController();

router.get('/stored/courses', meController.StoredCourses);
router.get('/trash/courses', meController.TrashCourses);

export default router
