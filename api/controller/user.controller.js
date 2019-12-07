import sgMail from '@sendgrid/mail';
import Send from '../utils/res.utils';
import Request from '../utils/req.utils';
import UserService from '../services/user.service';
import EmailService from '../services/email.service';
import sgKey from '../config';
import AuthHelper from '../utils/auth.utils';

const User = {
  async signup(req, res) {
    const reqData = Request.signUp(req);
    const user = await UserService.createUser(reqData);
    const { password, ...data } = user;
    return Send(res, 201, 'Account created successfully', data);
  },

  async verifyEmail(req, res) {
    const email = { ...EmailService.verifyUser(req, res), to: req.body.email };
    const keys = await sgKey;
    sgMail.setApiKey(keys);
    sgMail.send(email);
    return Send(
      res,
      200,
      `verification instructions sent to ${req.body.email}`
    );
  },

  signin(req, res) {
    const { email, roleId, id } = req.user;
    const token = AuthHelper.createToken(email, roleId, id);
    return Send(res, 200, 'login successful', { token });
  },

  async getUsers(req, res) {
    const users = await UserService.getAllUsers();
    return Send(res, 200, undefined, users);
  },

  async getUser(req, res) {
    const user = await UserService.getUser({ id: req.params.id });
    return Send(res, 200, undefined, user);
  },

  async updateUser(req, res) {
    const updateData = Request.updateUserBody(req);
    const user = await UserService.updateUser(updateData, {
      id: req.params.id
    });
    return Send(res, 200, undefined, user);
  }
};

export default User;
