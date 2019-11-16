import validate from '../utils/validator.util';
import Response from '../utils/res.utils';

const Validation = {

  signup(req, res, next) {
    validate(req.body, {
      firstName: { req: true, min: 2 },
      lastName: { req: true, min: 2 },
      password: { req: true, min: 4, confirm: req.body.confirmPassword },
      company: { alpha: true, min: 2, aplhaNum: true },
      telephone: { req: true, min: 8, num: true },
      address: { req: true, min: 2 }
    },
    (error) => Response(res, 400, error));
    next();
  },

  verify(req, res, next) {
    validate(req.body, {
      firstName: { req: true, min: 2 },
    }, (error) => Response(res, 400, error));
    next();
  },

  sigin(req, res, next) {
    validate(req.body, {
      email: { req: true, min: 2 },
      password: { req: true, min: 4 },
    }, (error) => Response(res, 400, error));
    next();
  }

};
export default Validation;
