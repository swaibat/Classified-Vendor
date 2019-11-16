import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const authHelper = {
  createToken(email) {
    return jwt.sign({ email }, process.env.APP_KEY);
  },

  hashPassword(password) {
    return bcrypt.hashSync(password, 10, (err, hash) => hash);
  },

  getToken(req) {
    return (req.headers.Authorization || req.body.token || req.params.token);
  },

  decodeToken(token, cb) {
    return jwt.verify(token, process.env.APP_KEY, (err, decoded) => cb(err, decoded));
  },
};

export default authHelper;
