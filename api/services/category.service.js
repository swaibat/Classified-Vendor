import db from '../database/models';

const CategoryService = {
  getAll() {
    return db.Category.findAll({ include: [{ model: db.SubCategory, required: true }] });
  },
};

export default CategoryService;
