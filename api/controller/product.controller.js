import { Op } from 'sequelize';
import Send from '../utils/res.utils';
import Get from '../utils/req.utils';
import ProductService from '../services/product.service';
import UploadService from '../services/file.upload.service';

const Product = {
  async create(req, res) {
    const reqData = { ...Get.prodBody(req), adons: Get.adons(req) };
    const product = await ProductService.create(reqData, req.files);
    return Send(res, 201, 'product created successfully', product);
  },

  async update(req, res) {
    const updateData = Get.updateProdBody(req);
    const product = await ProductService.update(
      updateData,
      { UserId: req.user.id, id: req.params.id },
      req.files
    );
    return Send(res, 201, 'product updated successfully', product);
  },

  async getOne(req, res) {
    return Send(res, 200, undefined, req.product);
  },

  async delete(req, res) {
    await UploadService.clearData({ ProductId: req.params.id });
    await ProductService.delete({ id: req.params.id });
    return Send(res, 200, 'product deleted successfully');
  },

  async getAll(req, res) {
    const products = await ProductService.getAllPrdcts();
    return Send(res, 200, undefined, products);
  },

  async getAllCoPrdcts(req, res) {
    const Products = await ProductService.getAllCoPrdcts({
      UserId: req.user.id
    });
    return Send(res, 200, undefined, Products);
  },

  async getCoPrdct(req, res) {
    const { user, params } = req;
    const product = await ProductService.getCoPrdct({
      UserId: user.id,
      id: params.id
    });
    return Send(res, 200, undefined, product);
  },

  async getPrdctsByCat(req, res) {
    const category = req.category.map(e => ({ CategoryId: e.id }));
    const Products = await ProductService.getAllCoPrdcts({
      [Op.or]: category
    });
    return Send(res, 200, undefined, Products);
  }
};

export default Product;
