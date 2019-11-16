import Response from '../utils/res.utils';
import Request from '../utils/req.utils';
import UserService from '../services/user.service';
import EmailService from '../services/email.service';
import sgMail from '../config';

const User = {
  async signup(req, res) {
    const reqData = Request.signUp(req);
    const user = await UserService.createUser(reqData);
    const { password, ...data } = user;
    return Response(res, 201, 'Account created successfully', data);
  },

  async verifyEmail(req, res) {
    const email = { ...EmailService.verifyUser(req, res), to: req.body.email };
    sgMail.send(email);
    Response(res, 200, `verification instructions sent to ${req.body.email}`);
  },

};

export default User;
