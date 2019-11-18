import Send from '../utils/res.utils';
import CategoryService from '../services/category.service';

const Product = {
  async getAll(req, res) {
    const categorys = await CategoryService.getAll();
    return Send(res, 200, undefined, categorys);
  },

  async create(req, res) {
    const category = req.user.roleId === 1
      ? await CategoryService.create({ name: req.body.name })
      : await CategoryService.sellerCreate({ name: req.body.name, userId: req.user.id });
    return Send(res, 201, 'Category created successfully', category);
  },

  async createSub(req, res) {
    const subCat = req.user.roleId === 1
      ? await CategoryService.createSub({
        CategoryId: req.params.id, name: req.body.name
      })
      : await CategoryService.sellerCreateSub({
        SellerCategoryId: req.params.id, name: req.body.name, userId: req.user.id
      });
    return Send(res, 201, 'sub-Category created successfully', subCat);
  },
};

export default Product;
