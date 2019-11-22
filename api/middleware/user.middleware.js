
import UserService from '../services/user.service';
import Send from '../utils/res.utils';
import AuthHelper from '../utils/auth.utils';

const UserMiddleware = {
  verifyToken(req, res, next) {
    const token = AuthHelper.getToken(req);
    AuthHelper.decodeToken(token, async (error, data) => {
      if (error) return Send(res, 400, error.message);
      const user = data ? await UserService.getUser({ email: data.email }) : '';
      req.body.email = data.email;
      req.user = user; next();
    });
  },

  async checkuserExist(req, res, next) {
    const user = await UserService.getUser({ email: req.body.email });
    if (user) return Send(res, 409, 'email address already in use');
    next();
  },

  async getUserDetails(req, res, next) {
    const { email, password } = req.body;
    const user = await UserService.getUser({ email });
    if (user && AuthHelper.comparePassword(password, user.password)) {
      req.user = user; return next();
    }
    return Send(res, 400, 'Invalid login details');
  },

  async checkRole(req, res, next) {
    if (req.user) {
      if (req.user.roleId === 3) return Send(res, 401, 'Not allowed to perform this operation');
    }
    next();
  },

  async checkCoExist(req, res, next) {
    const user = await UserService.getUser({ company: req.body.company });
    if (user) return Send(res, 409, 'Company name already registered');
    next();
  },

  async getCoByUser(req, res, next) {
    const user = await UserService.getUser({ company: req.params.co });
    if (!user) return Send(res, 404, 'company website not found');
    req.user = user;
    next();
  }

};

export default UserMiddleware;
