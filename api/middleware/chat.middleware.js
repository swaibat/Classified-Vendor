import UserService from '../services/user.service';
import Send from '../utils/res.utils';

const Chat = {
  async checkReceiverExist(req, res, next) {
    const { ReceiverId } = req.body;
    if (!ReceiverId) next();
    const user = await UserService.getUser({ id: ReceiverId });
    if (user) next();
    return Send(res, 400, 'this user does not exist');
  },

  async checkSelfSend(req, res, next) {
    if (req.user.id === JSON.parse(req.body.ReceiverId))
      return Send(res, 400, 'message can not be sent');
    next();
  }
};

export default Chat;
