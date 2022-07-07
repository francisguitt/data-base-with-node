import { Router } from "express";
const router = Router();
import createController from '../controllers/createController.js';
import readController from '../controllers/readController.js';
import updateController from '../controllers/updateController.js';
import deleteController from '../controllers/deleteController.js'
import homeController from '../controllers/homeController.js';
router.get('/', homeController);
router.get('/crt', createController);
router.get('/rd', readController);
router.get('/upd', updateController);
router.get('/del', deleteController);

export default router;
