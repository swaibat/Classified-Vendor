import express from 'express';
import ChatController from '../controller/chat.controller';
import UserMiddleware from '../middleware/user.middleware';
import ChatMiddleware from '../middleware/chat.middleware';
import Validate from '../validation';

const app = express.Router();

app.post(
  '/',
  Validate.chat,
  UserMiddleware.verifyToken,
  ChatMiddleware.checkSelfSend,
  ChatMiddleware.checkReceiverExist,
  ChatController.postChat
);

app.get('/', UserMiddleware.verifyToken, ChatController.getChats);

export default app;
