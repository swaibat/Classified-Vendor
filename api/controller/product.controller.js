import Send from '../utils/res.utils';
import Get from '../utils/req.utils';
import ProductService from '../services/product.service';

const Product = {
  async create(req, res) {
    const reqData = Get.prodBody(req);
    const { id, CategoryId } = await ProductService.create(reqData);
    req.files.map(async (image) => { await ProductService.postImages(image, id); });

    if (CategoryId === 1) {
      const vehicleData = { ...Get.vehicleBody(req), CategoryId, ProductId: id };
      await ProductService.createVehicle(vehicleData);
    }

    const product = await ProductService.get({ id });
    return Send(res, 201, 'product created successfully', product);
  },
};

export default Product;
