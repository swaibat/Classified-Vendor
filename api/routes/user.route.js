import express from 'express';
import UserMiddleware from '../middleware/user.middleware';
import UserController from '../controller/user.controller';
import Validate from '../validation';

const router = express.Router();

router.post('/verify',
  UserMiddleware.checkuserExist,
  UserController.verifyEmail);

router.post('/register/:token',
  Validate.signup,
  UserMiddleware.verifyToken,
  UserMiddleware.checkuserExist,
  UserController.signup);

export default router;
