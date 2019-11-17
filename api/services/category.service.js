import db from '../database/models';

const CategoryService = {
  getAll() {
    return db.Category.findAll({ include: [{ model: db.SubCategory, required: true }] });
  },

  create(data) {
    return db.Category.create(data, { include: [{ model: db.SubCategory, required: true }] });
  },

  getCategory(condition) {
    return db.Category.findOne({ where: condition });
  },
};

export default CategoryService;
