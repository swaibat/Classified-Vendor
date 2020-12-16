import Send from '../utils/res.utils';
import ProductService from '../services/product.service';

const Product = {
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
