import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const authHelper = {
  createToken(email, roleId) {
    return jwt.sign({ email, roleId }, process.env.APP_KEY);
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

  comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash, (err, res) => res);
  },
};

export default authHelper;
