import db from '../database/models';

const CategoryService = {
  getAllCats(condition) {
    return db.Category.findAll({
      where: condition,
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    });
  },

  getVendorCats(condition) {
    return db.VendorCategory.findAll({ where: condition, raw: true });
  },

  create(data) {
    return db.Category.create(data);
  },

  getCategory(condition) {
    return db.Category.findOne({ where: condition, raw: true });
  },

  getVendorCategory(condition) {
    return db.VendorCategory.findOne({ where: condition });
  },

  sellerCreate(data) {
    return db.VendorCategory.create(data);
  }
};

export default CategoryService;
