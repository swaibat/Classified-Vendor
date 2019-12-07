import express from 'express';
import fileUpload from 'express-fileupload';
import userMiddleware from '../middleware/user.middleware';
import PageController from '../controller/page.controller';
import PageMiddleware from '../middleware/page.middleware';
import Validate from '../validation';

const router = express.Router();

router.use(fileUpload());
router.get('/', PageController.getPages);

router.get('/:co', PageController.get);

router.post(
  '/',
  Validate.page,
  userMiddleware.verifyToken,
  userMiddleware.checkRole,
  PageMiddleware.checkCoExist,
  PageController.create
);

router.patch(
  '/',
  Validate.updatePage,
  userMiddleware.verifyToken,
  PageMiddleware.checkCoNoExist,
  PageController.update
);

export default router;
