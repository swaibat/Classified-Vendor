
import UserService from '../services/user.service';
import Response from '../utils/res.utils';
import AuthHelper from '../utils/auth.utils';

const UserMiddleware = {
  verifyToken(req, res, next) {
    const token = AuthHelper.getToken(req);
    AuthHelper.decodeToken(token, async (error, data) => {
      if (error) Response(res, 400, error.message);
      const user = data ? await UserService.getUser({ email: data.email }) : '';
      req.user = user; next();
    });
  },

  async checkuserExist(req, res, next) {
    const user = await UserService.getUser({ email: req.body.email });
    if (user) Response(res, 409, 'email address already in use');
    return next();
  },

  async getUserDetails(req, res, next) {
    const { email, password } = req.body;
    const user = await UserService.getUser({ email });
    if (user && AuthHelper.comparePassword(password, user.password)) {
      req.user = user; return next();
    }
    return Response(res, 400, 'Invalid login details');
  },

  async checkRole(req, res, next) {
    if (req.user.roleId !== 1) Response(res, 401, 'Not allowed to perform this operation');
    return next();
  },

  async checkSellerRole(req, res, next) {
    if (req.user.roleId === 3) {
      return Response(res, 401, 'Not allowed to perform this operation');
    }
    return next();
  }
};

export default UserMiddleware;
