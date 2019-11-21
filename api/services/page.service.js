import db from '../database/models';

const ProductService = {
  async get(condition) {
    const result = await db.Page.findOne({ where: condition,
      attributes: { exclude: 'updatedAt' },
      include: [{ model: db.User, attributes: { exclude: ['password', 'updatedAt'] }, }]
    });
    return result;
  },

  async create(data) {
    const result = await db.Page.create(data);
    return result;
  },

  async getAll() {
    const result = await db.Page.findAll();
    return result;
  },
};
export default ProductService;
