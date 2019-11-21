import Send from '../utils/res.utils';
import ProductService from '../services/product.service';

const Product = {
  async checkExist(req, res, next) {
    const product = await ProductService.get({ id: req.params.id });
    if (!product) return Send(res, 404, 'product with id not found');
    req.product = product;
    next();
  }
};

export default Product;
