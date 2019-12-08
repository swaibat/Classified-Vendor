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

// const users = [];

// const addUser = ({ id, name, room }) => {
//   name = name.trim().toLowerCase();
//   room = room.trim().toLowerCase();

//   const existingUser = users.find(
//     user => user.room === room && user.name === name
//   );

//   if (!name || !room) return { error: 'Username and room are required.' };
//   if (existingUser) return { error: 'Username is taken.' };

//   const user = { id, name, room };

//   users.push(user);

//   return { user };
// };

// const removeUser = id => {
//   const index = users.findIndex(user => user.id === id);

//   if (index !== -1) return users.splice(index, 1)[0];
// };

// const getUser = id => users.find(user => user.id === id);

// const getUsersInRoom = room => users.filter(user => user.room === room);

// module.exports = { addUser, removeUser, getUser, getUsersInRoom };
