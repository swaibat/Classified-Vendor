import Send from '../utils/res.utils';
import CategoryService from '../services/category.service';

const Product = {
  async getAll(req, res) {
    const categorys = await CategoryService.getAll();
    return Send(res, 200, undefined, categorys);
  },
  async create(req, res) {
    const categorys = await CategoryService.create({ name: req.body.name });
    return Send(res, 201, 'Category created successfully', categorys);
  },
};

export default Product;
