import Send from '../utils/res.utils';
import PageService from '../services/page.service';
import CategoryService from '../services/category.service';
import ProductService from '../services/product.service';
import UserService from '../services/user.service';
import Get from '../utils/req.utils';

const Product = {
  async get(req, res, next) {
    const domains = req.headers.host.split('.');
    const company = domains[0];
    if (domains.length > 1) {
      const page = await PageService.get({ company });
      if (!page) return Send(res, 404, 'web page not found',);
      const data = page.dataValues;
      data.Products = await ProductService.SellerGetOwn({ UserId: data.UserId });
      data.UserCategories = await CategoryService.SellerGetAll({ UserId: data.UserId });
      return Send(res, 200, undefined, page.dataValues);
    }
    return next();
  },

  async create(req, res) {
    const { company, id } = req.user;
    const pageData = { ...Get.pageBody(req), UserId: id, company };
    const page = await PageService.create(pageData);
    return Send(res, 201, 'page created successfully', page);
  },

  async home(req, res) {
    const Products = await ProductService.getAllPrdcts();
    const categories = await CategoryService.getAll();
    const sellers = await UserService.getAllSellers({ roleId: 2 });
    const pages = await PageService.getAll();
    return Send(res, 200, undefined, { sellers, pages, categories, Products, });
  },

  async update(req, res) {
    const updateData = Get.updatePageBody(req);
    const page = await PageService.update(updateData, { company: req.user.company });
    return Send(res, 201, 'page updated successfully', page);
  },

};

export default Product;
