import Send from '../utils/res.utils';
import CategoryService from '../services/category.service';

const Product = {
  async getAll(req, res) {
    const categorys = await CategoryService.getAll();
    return Send(res, 200, undefined, categorys);
  },
};

export default Product;
