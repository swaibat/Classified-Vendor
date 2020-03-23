/* eslint-disable camelcase */
import express from 'express';
import passport from 'passport';
import UserMiddleware from '../middleware/user.middleware';
import UserController from '../controller/user.controller';
import EmailsController from '../controller/email.controller';
import Validate from '../validation';
import '../config/passport';

const router = express.Router();
router.get(
  '/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  })
);
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  UserMiddleware.OauthLogin
);

router.post(
  '/auth/facebook',
  passport.authenticate('facebook-token'),
  UserMiddleware.OauthLoginFacebook
);

router.post(
  '/verify',
  Validate.verify,
  UserMiddleware.checkuserExist,
  UserController.verifyEmail
);

router.post(
  '/verify/:code',
  Validate.verify,
  UserMiddleware.checkuserExist,
  UserController.verifyCode
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

// router.post(
//   '/create',
//   Validate.signup,
//   UserMiddleware.decodeToken,
//   UserMiddleware.checkForTokenData,
//   UserMiddleware.checkCoExist,
//   UserController.signup
// );

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

router.get('/profile', UserMiddleware.verifyToken, UserController.getUser);

router.patch(
  '/:id/profile',
  Validate.params,
  UserMiddleware.verifyToken,
  UserMiddleware.getUserById,
  UserMiddleware.checkIfOwner,
  UserController.updateUser
);

router.delete(
  '/:id',
  UserMiddleware.verifyToken,
  UserMiddleware.checkAdminRole,
  UserController.deleteUser
);

export default router;
