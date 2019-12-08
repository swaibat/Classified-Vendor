import UserService from '../services/user.service';
import Send from '../utils/res.utils';

const Notification = {
  async checkReceiverExist(req, res, next) {
    const { ReceiverId } = req.body;
    if (!ReceiverId) return next();
    const user = await UserService.getUser({ id: ReceiverId });
    if (user) return next();
    return Send(res, 404, 'receiver does not exist');
  }
};

export default Notification;
