/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable array-callback-return */
import fs from 'fs';
import validate from '../utils/validator.util';
import Send from '../utils/res.utils';

const Validation = {
  signup(req, res, next) {
    const err = validate(
      req.body,
      {
        firstName: { req: true, min: 2 },
        lastName: { req: true, min: 2 },
        password: { req: true, min: 4, confirm: req.body.confirmPassword },
        company: { min: 2, aplhaNum: true },
        telephone: { req: true, min: 8, num: true },
        address: { req: true, min: 2 }
      },
      error => error
    );
    if (err) return Send(res, 400, err);
    next();
  },

  verify(req, res, next) {
    const err = validate(
      req.body,
      {
        email: { req: true, email: true }
      },
      error => error
    );
    if (err) return Send(res, 400, err);
    next();
  },

  sigin(req, res, next) {
    const err = validate(
      req.body,
      {
        email: { req: true, email: true },
        password: { req: true, min: 4 }
      },
      error => error
    );
    if (err) return Send(res, 400, err);
    next();
  },

  product(req, res, next) {
    req.body.email = req.user.email;
    const err = validate(
      req.body,
      {
        name: { req: true, min: 4 },
        CategoryId: { req: true, num: true },
        price: { req: true, num: true },
        negotiable: { bool: true },
        description: { req: true, min: 10 }
      },
      error => error
    );
    if (err) return Send(res, 400, err);
    next();
  },

  images(req, res, next) {
    if (!req.files) return Send(res, 400, 'upload atleast one Image');
    const { images } = req.files;
    const files = images.name ? [images] : images;
    req.files = files;
    files.map(async image => {
      if (!image.mimetype.startsWith('image')) {
        return Send(res, 400, `${image.name} image is invalid`);
      }
      if (image.size > 4e6) {
        return Send(res, 400, `${image.name} size exceeds 4Mbs`);
      }
      if (req.originalUrl === '/about') {
        await fs.mkdir(`./api/uploads/about/${req.user.company}/`, () => {
          image.mv(`./api/uploads/about/${req.user.company}/${image.name}`);
        });
      } else {
        image.mv(`./api/uploads/products/${image.name}`);
      }
    });
    next();
  },

  category(req, res, next) {
    const err = validate(
      req.body,
      { name: { req: true, min: 4 } },
      error => error
    );
    if (err) return Send(res, 400, err);
    next();
  },

  params(req, res, next) {
    const err = validate(
      req.params,
      { id: { req: true, num: true } },
      error => error
    );
    if (err) return Send(res, 400, err);
    next();
  },

  page(req, res, next) {
    const err = validate(
      req.body,
      { CategoryId: { req: true, num: true } },
      error => error
    );
    if (err) return Send(res, 400, err);
    next();
  },

  updateProduct(req, res, next) {
    req.body.email = req.user.email;
    const err = validate(
      req.body,
      {
        name: { min: 4 },
        CategoryId: { num: true },
        price: { num: true },
        negotiable: { bool: true },
        description: { min: 10 }
      },
      error => error
    );
    if (err) return Send(res, 400, err);
    next();
  },

  updatePage(req, res, next) {
    const err = validate(
      req.body,
      { CategoryId: { num: true } },
      error => error
    );
    if (err) return Send(res, 400, err);
    next();
  },

  faq(req, res, next) {
    const err = validate(
      req.body,
      {
        question: { req: true },
        answer: { req: true }
      },
      error => error
    );
    if (err) return Send(res, 400, err);
    next();
  },

  chat(req, res, next) {
    const err = validate(
      req.body,
      {
        message: { req: true, min: 5 },
        ReceiverId: { req: true, num: true }
      },
      error => error
    );
    if (err) return Send(res, 400, err);
    next();
  },

  notification(req, res, next) {
    const err = validate(
      req.body,
      {
        subject: { req: true, min: 5 },
        message: { req: true, min: 5 },
        ReceiverId: { num: true }
      },
      error => error
    );
    if (err) return Send(res, 400, err);
    next();
  },

  rating(req, res, next) {
    const err = validate(
      req.body,
      {
        feedback: { req: true, min: 5 },
        cout: { req: true, num: true },
        UserId: { num: true }
      },
      error => error
    );
    if (err) return Send(res, 400, err);
    next();
  },

  email(req, res, next) {
    const err = validate(
      req.body,
      { email: { req: true, email: true } },
      error => error
    );
    if (err) return Send(res, 400, err);
    next();
  },

  password(req, res, next) {
    const err = validate(
      req.body,
      { password: { req: true, min: 5 } },
      error => error
    );
    if (err) return Send(res, 400, err);
    next();
  },
  about(req, res, next) {
    const err = validate(
      req.body,
      {
        employees: { req: true },
        description: { req: true },
        startDate: { req: true }
      },
      error => error
    );
    if (err) return Send(res, 400, err);
    next();
  }
};

export default Validation;
