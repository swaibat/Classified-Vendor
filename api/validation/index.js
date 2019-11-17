import validate from '../utils/validator.util';
import Send from '../utils/res.utils';

const Validation = {
  signup(req, res, next) {
    validate(req.body, {
      firstName: { req: true, min: 2 },
      lastName: { req: true, min: 2 },
      password: { req: true, min: 4, confirm: req.body.confirmPassword },
      company: { min: 2, aplhaNum: true },
      telephone: { req: true, min: 8, num: true },
      address: { req: true, min: 2 }
    },
    (error) => Send(res, 400, error));
    next();
  },

  verify(req, res, next) {
    validate(req.body, {
      firstName: { req: true, min: 2 },
    }, (error) => Send(res, 400, error));
    next();
  },

  sigin(req, res, next) {
    validate(req.body, {
      email: { req: true, min: 2 },
      password: { req: true, min: 4 },
    }, (error) => Send(res, 400, error));
    next();
  },

  product(req, res, next) {
    req.body.email = req.user.email;
    validate(req.body, {
      name: { req: true, min: 4 },
      categoryId: { req: true, num: true },
      subCategoryId: { req: true, num: true },
      price: { req: true, num: true, },
      negotiable: { bool: true },
      description: { req: true, min: 10 }
    },
    (error) => Send(res, 400, error));
    next();
  },

  images(req, res, next) {
    if (!req.files) Send(res, 400, 'upload atleast one Image');
    let files = req.files.images;
    if (files.name) files = [files];
    req.files = files;
    files.map(image => {
      if (!image.mimetype.startsWith('image')) return Send(res, 400, `${image.name} image is invalid`);
      if (image.size > 5e6) return Send(res, 400, `${image.name} size exceeds 5Mbs`);
      return image.mv(`./api/uploads/products/${image.name}`);
    });
    next();
  }
};
export default Validation;
