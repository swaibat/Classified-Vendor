import db from '../database/models';

const ProductService = {
  async create(product) {
    const result = await db.Product.create(product);
    return result.get({ plain: true });
  },

  postImages(img, productId) {
    const { name, size, mimetype } = img;
    return db.productFile.create({
      name, size, type: mimetype, productId
    });
  }
};

export default ProductService;
