import ChatService from '../services/chat.service';
import Send from '../utils/res.utils';

const sendChatEcho = (ReceiverId, data, connectedClients, io) => {
  if (!ReceiverId) {
    io.emit('new_message', data);
  } else if (connectedClients[ReceiverId.toString()]) {
    connectedClients[ReceiverId.toString()].forEach(element => {
      io.to(element).emit('new_message', data);
    });
  }
};

const ChatController = {
  async postChat(req, res) {
    const { message, ReceiverId } = req.body;
    const { id } = req.user;
    const { io } = req;
    const chat = {
      SenderId: id,
      message,
      ReceiverId
    };
    const result = await ChatService.addChat(chat);
    sendChatEcho(ReceiverId, result, req.connectedClients, io);
    Send(res, 201, 'chat posted successfully', result);
  },

  async getChats(req, res) {
    const { id } = req.user;
    let { limit, offset } = req.query;

    if (!limit) limit = 10;
    if (!offset) offset = 0;
    const chatList = await ChatService.getChat(id, offset, limit);

    Send(res, 200, 'chat list', chatList);
  }
};

export default ChatController;
