import Send from '../utils/res.utils';
import PageService from '../services/page.service';
import CategoryService from '../services/category.service';
import ProductService from '../services/product.service';

const Product = {
  async get(req, res) {
    const { dataValues } = await PageService.get({ id: req.params.id });
    dataValues.Products = await ProductService.SellerGetOwn({ UserId: dataValues.UserId });
    dataValues.UserCategories = await CategoryService.SellerGetAll({ UserId: dataValues.UserId });
    return Send(res, 200, undefined, dataValues);
  }
};

export default Product;
