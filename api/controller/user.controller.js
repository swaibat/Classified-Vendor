/* eslint-disable no-unused-vars */

import sgMail from '@sendgrid/mail';
import Send from '../utils/res.utils';
import Request from '../utils/req.utils';
import UserService from '../services/user.service';
import EmailService from '../services/email.service';
import { transporter } from '../config';
import AuthHelper from '../utils/auth.utils';

const User = {
  async signup(req, res) {
    const reqData = Request.signUp(req);
    const user = await UserService.createUser(reqData);
    const { password, ...data } = user.dataValues;
    return Send(res, 201, 'Account created successfully', data);
  },

  async verifyEmail(req, res) {
    const email = {
      ...EmailService.verifyUser(req, res),
      to: req.body.email
    };
    await transporter.sendMail(email, (error, success) => {
      if (error) {
        return Send(res, 400, error.message);
      }
      return Send(
        res,
        200,
        `verification instructions sent to ${req.body.email}`
      );
    });
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
    const user = await UserService.getUser({ id: req.user.id });
    return Send(res, 200, undefined, user);
  },

  async updateUser(req, res) {
    const updateData = Request.updateUserBody(req);
    const user = await UserService.updateUser(updateData, {
      id: req.params.id
    });
    return Send(res, 200, undefined, user);
  },

  async logout(req, res) {
    UserService.updateUser({ lastSeen: new Date() }, { email: req.user.email });
    return Send(res, 200, 'logout successfull');
  },

  async resetPassword(req, res) {
    const password = AuthHelper.hashPassword(req.body.password);
    await UserService.updateUser({ password }, { email: req.user.email });
    Send(res, 200, 'password updated successfully');
  },

  async deleteUser(req, res) {
    await UserService.deleteUser({ id: req.params.id });
    return Send(res, 200, 'user successfulyy deleted');
  }
};

export default User;
