import db from '../database/models';

const ProductService = {
  async create(product) {
    const result = await db.Product.create(product, {
      include: [{ model: db.productFile }]
    });
    return result.get({ plain: true });
  },

  postImages(img, ProductId) {
    const { name, size, mimetype } = img;
    return db.productFile.create({
      name, size, type: mimetype, ProductId
    });
  },

  async get(condition) {
    const result = await db.Product.findOne({
      where: condition,
      include: { model: db.productFile,
        attributes: { exclude: ['createdAt', 'updatedAt', 'ProductId'] } },
    });
    return result;
  },

  async SellerGetOwn(condition) {
    const result = await db.Product.findAll({
      where: condition,
      include: [
        { model: db.productFile,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'ProductId'] } },
      ]
    });
    return result;
  },

  async getAllPrdcts() {
    const result = await db.Product.findAll({
      include: [{ model: db.productFile,
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'ProductId'] } },
      ]
    });
    return result;
  },

  async update(product, condition) {
    const result = await db.Product.update(product, {
      where: condition, returning: true, raw: true, plain: true
    });
    return result[1];
  },

  async delete(condition) {
    const result = await db.Product.destroy({ where: condition });
    return result;
  },

  getAllCoPrdcts(condition) {
    return db.Product.findAll({
      where: condition, include: { model: db.productFile }
    });
  },

  getCoPrdct(condition) {
    return db.Product.findOne({
      where: condition, include: { model: db.productFile }
    });
  }

};

export default ProductService;
