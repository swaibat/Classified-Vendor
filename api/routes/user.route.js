import express from 'express';
import UserMiddleware from '../middleware/user.middleware';
import UserController from '../controller/user.controller';
import Validate from '../validation';

const router = express.Router();

router.post('/verify',
  Validate.verify,
  UserMiddleware.checkuserExist,
  UserController.verifyEmail);

router.post('/register/:token',
  Validate.signup,
  UserMiddleware.verifyToken,
  UserMiddleware.checkCoExist,
  UserMiddleware.checkuserExist,
  UserController.signup);

router.post('/login',
  Validate.sigin,
  UserMiddleware.getUserDetails,
  UserController.signin);

export default router;
