import express from 'express';
import NotificationController from '../controller/notification.controller';
import UserMiddleware from '../middleware/user.middleware';
import NotificationMiddleware from '../middleware/notification.middleware';
import Validate from '../validation';

const app = express.Router();

app.post(
  '/',
  UserMiddleware.checkAdminRole,
  Validate.notification,
  UserMiddleware.verifyToken,
  NotificationMiddleware.checkReceiverExist,
  NotificationController.notify
);

app.get(
  '/',
  UserMiddleware.verifyToken,
  NotificationController.getNotifications
);

export default app;
