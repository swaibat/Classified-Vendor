/* eslint-disable no-console */
import Send from '../utils/res.utils';
import PageService from '../services/page.service';
import CategoryService from '../services/category.service';
import ProductService from '../services/product.service';
import Get from '../utils/req.utils';

const Product = {
  async get(req, res) {
    const page = await PageService.get({ company: req.params.co });
    if (!page) return Send(res, 404, 'web page not found');
    const data = page.dataValues;
    data.Products = await ProductService.VendorGetOwn({ UserId: data.UserId });
    data.UserCategories = await CategoryService.getVendorCats({
      UserId: data.UserId
    });
    return Send(res, 200, undefined, page.dataValues);
  },

  async create(req, res) {
    const { company, id } = req.user;
    const pageData = { ...Get.pageBody(req), UserId: id, company };
    const page = await PageService.create(pageData);
    return Send(res, 201, 'page created successfully', page);
  },

  async getPages(req, res) {
    const pages = await PageService.getAll();
    return Send(res, 200, undefined, pages);
  },

  async update(req, res) {
    const updateData = Get.updatePageBody(req);
    const page = await PageService.update(updateData, {
      company: req.user.company
    });
    return Send(res, 201, 'page updated successfully', page);
  },
  // eslint-disable-next-line no-unused-vars
  async home(req, res) {
    const { io } = req;
    io.on('connection', (socket) => {
      console.log('a user connected');
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });
  }
};

export default Product;
