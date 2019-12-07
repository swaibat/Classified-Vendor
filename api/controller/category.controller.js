import Send from '../utils/res.utils';
import CategoryService from '../services/category.service';
import Categories from '../utils/category';

const Product = {
  async getCatAll(req, res) {
    const categorys = await CategoryService.getAllCats();
    return Send(res, 200, undefined, Categories(categorys));
  },

  async getVendorCats(req, res) {
    const categorys = await CategoryService.getVendorCats({
      UserId: req.user.id
    });
    return Send(res, 200, undefined, categorys);
  },

  async create(req, res) {
    const category =
      req.user.roleId === 1
        ? await CategoryService.create({ name: req.body.name })
        : await CategoryService.sellerCreate({
            name: req.body.name,
            UserId: req.user.id
          });
    return Send(res, 201, 'Category created successfully', category);
  }
};

export default Product;
