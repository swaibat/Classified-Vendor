import UserService from '../services/user.service';
import Send from '../utils/res.utils';

const Chat = {
  async checkReceiverExist(req, res, next) {
    const { ReceiverId } = req.body;
    const user = await UserService.getUser({ id: ReceiverId });
    if (user) return next();
    return Send(res, 400, 'receiver does not exist');
  },

  async checkSelfSend(req, res, next) {
    if (req.user.id === JSON.parse(req.body.ReceiverId)) return Send(res, 400, 'message can not be sent');
    next();
  }
};

export default Chat;
