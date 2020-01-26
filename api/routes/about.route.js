import express from 'express';
import fileUpload from 'express-fileupload';
import userMiddleware from '../middleware/user.middleware';
import AboutController from '../controller/about.controller';
import AboutMiddleware from '../middleware/about.middleware';
import Validate from '../validation';

const router = express.Router();

router.post(
  '/',
  userMiddleware.verifyToken,
  Validate.about,
  Validate.images,
  AboutMiddleware.checkAboutExist,
  AboutController.create
);

router.patch(
  '/',
  userMiddleware.verifyToken,
  AboutMiddleware.checkNoAboutExist,
  AboutController.update
);

export default router;
