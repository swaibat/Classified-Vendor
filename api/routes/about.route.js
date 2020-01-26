import express from 'express';
import userMiddleware from '../middleware/user.middleware';
import AboutController from '../controller/about.controller';
import AboutMiddleware from '../middleware/about.middleware';
import Validate from '../validation';

const router = express.Router();

router.get(
  '/:id',
  AboutMiddleware.checkNoAboutExist,
  AboutController.getAbouts
);

router.post(
  '/',
  userMiddleware.verifyToken,
  AboutMiddleware.checkAboutExist,
  AboutController.create
);

router.patch(
  '/:id',
  Validate.params,
  userMiddleware.verifyToken,
  AboutMiddleware.checkNoAboutExist,
  AboutController.update
);

export default router;
