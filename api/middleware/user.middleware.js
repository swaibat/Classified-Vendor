/* eslint-disable no-console */
import UserService from '../services/user.service';
import Send from '../utils/res.utils';
import AuthHelper from '../utils/auth.utils';

const UserMiddleware = {
  verifyToken(req, res, next) {
    const token = AuthHelper.getToken(req);
    AuthHelper.decodeToken(token, async (error, data) => {
      if (error) return Send(res, 400, error.message);
      const user = data && await UserService.getUser({ email: data.email });
      if (!user) return Send(res, 404, 'user does not exist');
      req.data = data;
      req.user = user.dataValues;
      next();
    });
  },

  decodeToken(req, res, next) {
    const token = AuthHelper.getToken(req);
    AuthHelper.decodeToken(token, async (error, email) => {
      if (error) return Send(res, 400, error.message);
      req.body.email = email;
      next();
    });
  },

  async checkForTokenData(req, res, next) {
    const user = await UserService.getUser({ email: req.body.email });
    if (user) return Send(res, 409, 'email address already in use');
    next();
  },

  async checkUsername(req, res, next) {
    const user = await UserService.getUser({ username: req.body.username });
    if (user) return Send(res, 409, 'username already in use');
    next();
  },

  async checkuserExist(req, res, next) {
    if (req.body.email) {
      const user = await UserService.getUser({ email: req.body.email });
      if (user) return Send(res, 409, 'email address already in use');
      return next();
    }
    if (req.body.telephone) {
      const user = await UserService.getUser({ telephone: req.body.telephone });
      if (user) return Send(res, 409, 'telephone number already in use');
      return next();
    }
  },

  async OauthLogin(req, res) {
    const { id, email } = await UserService.findOrCreateUser(
      req.user,
      req.user.email
    );
    return res.redirect(
      `${process.env.FRONTEND_BASE_URL}/login?token=${AuthHelper.createToken(
        id,
        email
      )}`
    );
  },

  async OauthLoginFacebook(req, res) {
    const { id, email } = await UserService.findOrCreateUser(
      req.user,
      req.user.email
    );
    return Send(res, 201, 'User logged successfully', {
      id,
      email,
      token: AuthHelper.createToken(id, email),
    });
  },

  async getUserDetails(req, res, next) {
    const { username, password } = req.body;
    const user = await UserService.getUser({ username });
    if (user && AuthHelper.comparePassword(password, user.password)) {
      req.user = user;
      return next();
    }
    return Send(res, 400, 'Invalid login details');
  },

  async checkRole(req, res, next) {
    if (req.user && req.user.id !== req.category.UserId) {
      return Send(res, 401, 'Not allowed to perform this operation');
    }
    next();
  },

  async checkAdminRole(req, res, next) {
    if (req.user.id !== 1) {
      return Send(res, 401, 'Not allowed to perform this operation');
    }
    next();
  },

  async checkIfOwner(req, res, next) {
    if (req.user.id !== JSON.parse(req.params.id) && req.user.roleId !== 1) {
      return Send(res, 401, 'Not allowed to perform this operation');
    }
    next();
  },

  async checkCoExist(req, res, next) {
    if (req.body.company) {
      const company = await UserService.getUser({ company: req.body.company });
      if (company) return Send(res, 409, 'Company name already registered');
    }
    next();
  },

  async getCoByUser(req, res, next) {
    const user = await UserService.getUser({ company: req.params.co });
    if (!user) return Send(res, 404, 'company website not found');
    req.user = user;
    next();
  },

  async getUserById(req, res, next) {
    const user = await UserService.getUser({ id: req.user.id });
    if (!user) return Send(res, 404, 'user not found');
    next();
  },

  async getUserbyEmail(req, res, next) {
    const user = await UserService.getUser({ email: req.body.email });
    if (!user) return Send(res, 404, 'user not found');
    next();
  },

  connect(req, res, next) {
    const { io } = req;
    io.on('connection', async (socket) => socket.on('disconnect', async () => {}));
    next();
  },
};

export default UserMiddleware;
