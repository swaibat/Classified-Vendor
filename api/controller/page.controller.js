import Send from '../utils/res.utils';
import PageService from '../services/page.service';
import CategoryService from '../services/category.service';
import ProductService from '../services/product.service';

const Product = {
  async get(req, res) {
    const company = req.headers.host.split('.')[0];
    const page = await PageService.get({ company });
    if (!page) return Send(res, 200, 'page not found',);
    const data = page.dataValues;
    data.Products = await ProductService.SellerGetOwn({ UserId: data.UserId });
    data.UserCategories = await CategoryService.SellerGetAll({ UserId: data.UserId });
    return Send(res, 200, undefined, page.dataValues);
  }
};

export default Product;
