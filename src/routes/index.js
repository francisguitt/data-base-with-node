import { Router } from "express";
const router = Router();


import homeController from '../controllers/homeController.js';
import aboutController from '../controllers/aboutController.js';
import servicesController from '../controllers/servicesController.js';
import contactController from '../controllers/contactController.js';

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/services', servicesController);
router.get('/contacts', contactController);

export default router;
