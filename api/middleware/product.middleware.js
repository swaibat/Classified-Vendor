import Send from '../utils/res.utils';
import ProductService from '../services/product.service';

const Product = {
  async checkExist(req, res, next) {
    req.params.name = req.params.id ? req.params.id : req.params.name;
    if (req.params.name && req.params.name.match(/^[0-9]*[1-9][0-9]*$/)) {
      const product = await ProductService.get({ id: req.params.name });
      if (!product) return Send(res, 404, 'product with id not found');
      req.product = product;
      return next();
    }
    const product = await ProductService.get({ name: req.params.name });
    if (!product) return Send(res, 404, 'product with id not found');
    req.product = product;
    next();
  },

  async checkItemExist(req, res, next) {
    const product = await ProductService.findOne({ id: req.params.id });
    if (!product) return Send(res, 404, 'product with id not found');
    req.product = product.dataValues;
    next();
  },

  async checkIfNameExist(req, res, next) {
    const product = await ProductService.findOne({ name: req.body.name });
    if (product) return Send(res, 409, 'product already exists');
    next();
  }
};

export default Product;
