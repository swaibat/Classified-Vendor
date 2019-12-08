/* eslint-disable prettier/prettier */
import { Op } from 'sequelize';
import db from '../database/models';

const groupBy = (array, key) => array.reduce((newArray, element) => {
  (newArray[element[key]] = newArray[element[key]] || []).push(element);
  return newArray;
}, {});

const ChatService = {
  async addChat(chat) {
    const newChat = await db.Chat.create(chat);
    return newChat;
  },

  async getChat(userId, offset, limit) {
    const chats = await db.Chat.findAll({
      where: {
        [Op.or]: [
          { SenderId: userId },
          { ReceiverId: null },
          { ReceiverId: userId },
        ],
      },
      offset,
      limit,
    });
    return groupBy(chats, 'SenderId');
  }
};

export default ChatService;