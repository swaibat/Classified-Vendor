
import UserService from '../services/user.service';
import Response from '../utils/res.utils';
import AuthHelper from '../utils/auth.utils';

const UserMiddleware = {
  verifyToken(req, res, next) {
    const token = AuthHelper.getToken(req);
    AuthHelper.decodeToken(token, (error, data) => {
      error ? Response(res, 400, error.message) : (req.body.email = data.email, next());
    });
  },

  async checkuserExist(req, res, next) {
    const user = await UserService.getUser({ email: req.body.email });
    if (user) return Response(res, 409, 'email address already in use');
    next();
  },

};

export default UserMiddleware;
