import Send from '../utils/res.utils';
import EmailService from '../services/email.service';

const email = {
  async sendResetEmail(req, res) {
    await EmailService.sendResetPasswordEmail(req);
    Send(res, 201, `password reset instructions sent to ${req.user.email}`);
  }
};

export default email;
