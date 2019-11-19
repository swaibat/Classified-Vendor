import db from '../database/models';

const CategoryService = {
  getAll() {
    return db.Category.findAll({
      include: [{ model: db.SubCategory, include: [{ model: db.SubCategoryOne }] }]
    });
  },

  create(data) {
    return db.Category.create(data);
  },

  getCategory(condition) {
    return db.Category.findOne({ where: condition });
  },

  getSellerCategory(condition) {
    return db.SellerCategory.findOne({ where: condition });
  },

  sellerCreate(data) {
    return db.SellerCategory.create(data);
  },

  getSubCategory(condition) {
    return db.SubCategory.findOne({ where: condition });
  },

  createSub(data) {
    return db.SubCategory.create(data);
  },

  sellerCreateSub(data) {
    return db.SellerSubCategory.create(data);
  },

  getSellerSubCategory(condition) {
    return db.SellerSubCategory.findOne({ where: condition });
  },
};

export default CategoryService;
