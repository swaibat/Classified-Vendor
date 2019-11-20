import db from '../database/models';

const ProductService = {
  async get(condition) {
    const result = await db.Page.findOne({ where: condition,
      include: [{ model: db.User }]
    });
    return result;
  },
};
export default ProductService;
