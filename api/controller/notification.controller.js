import NotificationService from '../services/notification.service';
import Send from '../utils/res.utils';

const NotificationController = {
  async notify(req, res) {
    const { message, ReceiverId, subject } = req.body;
    const notify = { subject, message, ReceiverId };
    const result = await NotificationService.notify(notify);
    Send(res, 201, 'notification  sent successfully', result);
  },

  async getNotifications(req, res) {
    const notifications = await NotificationService.getNotifications(req.user.id);
    Send(res, 200, 'Notification list', notifications);
  }
};

export default NotificationController;
