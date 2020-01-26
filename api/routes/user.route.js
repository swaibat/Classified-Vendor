import express from 'express';
import UserMiddleware from '../middleware/user.middleware';
import UserController from '../controller/user.controller';
import EmailsController from '../controller/email.controller';
import Validate from '../validation';

const router = express.Router();

/**
 * verify user email before register
 */
router.post(
  '/verify',
  Validate.verify,
  UserMiddleware.checkuserExist,
  UserController.verifyEmail
);
/**
 * register user with valid token
 */
router.post(
  '/register/:token',
  Validate.signup,
  UserMiddleware.decodeToken,
  UserMiddleware.checkForTokenData,
  UserMiddleware.checkCoExist,
  UserController.signup
);

router.post(
  '/login',
  Validate.sigin,
  UserMiddleware.getUserDetails,
  UserController.signin
);

router.get('/logout/:token', UserMiddleware.verifyToken, UserController.logout);

router.post(
  '/reset-password',
  Validate.email,
  UserMiddleware.getUserbyEmail,
  EmailsController.sendResetEmail
);

router.patch(
  '/reset-password/:token',
  Validate.password,
  UserController.resetPassword
);

router.get(
  '/',
  UserMiddleware.verifyToken,
  UserMiddleware.checkAdminRole,
  UserController.getUsers
);

router.get(
  '/profile',
  UserMiddleware.verifyToken,
  UserController.getUser
);

router.patch(
  '/:id/profile',
  Validate.params,
  UserMiddleware.verifyToken,
  UserMiddleware.getUserById,
  UserMiddleware.checkIfOwner,
  UserController.updateUser
);

router.delete(
  '/',
  UserMiddleware.verifyToken,
  UserMiddleware.checkAdminRole,
  UserController.deleteUser
);

export default router;
