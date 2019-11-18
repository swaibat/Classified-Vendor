import db from '../database/models';

const CategoryService = {
  getAll() {
    return db.Category.findAll({ include: [{ model: db.SubCategory, required: true }] });
  },

  create(data) {
    return db.Category.create(data);
  },

  getCategory(condition) {
    return db.Category.findOne({ where: condition });
  },

  Sellercreate(data) {
    return db.SupplierCategory.create(data);
  },

  getSellerCategory(condition) {
    return db.SupplierCategory.findOne({ where: condition, raw: true });
  },
};

export default CategoryService;
