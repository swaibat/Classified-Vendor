import { Op } from 'sequelize';
import db from '../database/models';

const ChatService = {
  async addChat(chat) {
    const newChat = await db.Chat.create(chat);
    return newChat;
  },

  async getChat({ id }) {
    return db.Chat.findAll({
      where: { [Op.or]: [{ SenderId: id }, { ReceiverId: id }] },
      attributes: { exclude: ['updatedAt'] },
      include: [{
        model: db.User,
        as: 'sender',
        attributes: ['id', 'firstName', 'lastName', 'avatar']
      }, {
        model: db.User,
        as: 'receiver',
        attributes: ['id', 'firstName', 'lastName', 'avatar']
      }],
      order: [['createdAt', 'ASC']]
    });
  }
};

export default ChatService;
