import Send from '../utils/res.utils';
import ProductService from '../services/product.service';

const Product = {
  async checkExist(req, res, next) {
    const product = await ProductService.get({ name: req.params.name });
    if (!product) return Send(res, 404, 'product with id not found');
    req.product = product.dataValues;
    next();
  }
};

export default Product;
