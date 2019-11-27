/* eslint-disable no-restricted-syntax */
import ProductService from '../services/product.service';

const adons = {
  async addFields(object) {
    const { CategoryId, id } = object;
    const product = await ProductService.getVehicle({ CategoryId, ProductId: id });
    for (const key in product) {
      if (product[key]) {
        object[key] = product[key];
      }
    }
    return object;
  }
};

export default adons;
