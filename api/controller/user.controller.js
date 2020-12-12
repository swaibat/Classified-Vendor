/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { client, serviceId, transporter } from '../config';
import Send from '../utils/res.utils';
import Request from '../utils/req.utils';
import UserService from '../services/user.service';
import EmailService from '../services/email.service';

import AuthHelper from '../utils/auth.utils';

const User = {
  async signup(req, res) {
    const reqData = Request.signUp(req);
    const user = await UserService.createUser(reqData);
    const { password, ...data } = user.dataValues;
    return Send(res, 201, 'Account created successfully', data);
  },

  async verifyEmail(req, res) {
    req.body.telephone
      ? client.verify
        .services(serviceId)
        .verifications.create({
          channel: req.body.channel,
          to: req.body.telephone
        })
        .then(message => Send(res, 200, `verification code sent to ${message.to}`))
        .catch(error => Send(res, 400, error.message))
      : await transporter.sendMail(
        {
          ...EmailService.verifyUser(req, res),
          to: req.body.email
        },
        (error, success) => {
          if (error) {
            return Send(res, 400, error.message);
          }
          return Send(
            res,
            200,
            `verification instructions sent to ${req.body.email}`
          );
        }
      );
  },

  async verifyCode(req, res) {
    client.verify
      .services(serviceId)
      .verificationChecks.create({
        code: req.params.code,
        to: req.body.telephone
      })
      .then(() => Send(res, 200, 'verification successful'))
      .catch(error => Send(res, 400, error.message));
  },

  signin(req, res) {
    const { id, username, email } = req.user;
    const token = AuthHelper.createToken({
      id,
      username,
      email,
    });
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
    return Send(res, 200, 'user successfuly deleted');
  }
};

export default User;
