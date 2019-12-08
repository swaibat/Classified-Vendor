import ChatService from '../services/chat.service';
import Send from '../utils/res.utils';

const ChatController = {
  async postChat(req, res) {
    const { message, ReceiverId } = req.body;
    const { id } = req.user;
    const chat = {
      SenderId: id,
      message,
      ReceiverId
    };
    const result = await ChatService.addChat(chat);
    Send(res, 201, 'chat posted successfully', result);
  },

  async getChats(req, res) {
    const { id } = req.user;
    const chatList = await ChatService.getChat(id);
    Send(res, 200, 'chat list', chatList);
  }
};

export default ChatController;
