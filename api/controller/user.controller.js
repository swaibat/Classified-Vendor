import Send from '../utils/res.utils';
import Request from '../utils/req.utils';
import UserService from '../services/user.service';
import EmailService from '../services/email.service';
import sgMail from '../config';
import AuthHelper from '../utils/auth.utils';

const User = {
  async signup(req, res) {
    const reqData = Request.signUp(req);
    const user = await UserService.createUser(reqData);
    const { password, ...data } = user;
    return Send(res, 201, 'Account created successfully', data);
  },

  verifyEmail(req, res) {
    const email = { ...EmailService.verifyUser(req, res), to: req.body.email };
    sgMail.send(email);
    return Send(res, 200, `verification instructions sent to ${req.body.email}`);
  },

  signin(req, res) {
    const { email, roleId, id } = req.user;
    const token = AuthHelper.createToken(email, roleId, id);
    return Send(res, 200, 'login successful', { token });
  },

};

export default User;
