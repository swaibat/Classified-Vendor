import express from 'express';
import fileUpload from 'express-fileupload';
import userMiddleware from '../middleware/user.middleware';
import PageController from '../controller/page.controller';
import PageMiddleware from '../middleware/page.middleware';
import Validate from '../validation';

const router = express.Router();

router.use(fileUpload());

router.get('/',
  PageController.get,
  PageController.home);

router.post('/pages',
  Validate.page,
  userMiddleware.verifyToken,
  PageMiddleware.checkCoExist,
  PageController.create);

export default router;
