import db from '../database/models';

const CategoryService = {
  getAll() {
    return db.Category.findAll({
      include: [{ model: db.SubCategory, include: [{ model: db.SubCategoryOne }] }]
    });
  },
  SellerGetAll(condition) {
    return db.SellerCategory.findAll({ where: condition,
      include: [{ model: db.SellerSubCategory, include: [{ model: db.SellerSubCategoryOne }] }]
    });
  },

  create(data) {
    return db.Category.create(data);
  },

  getCategory(condition) {
    return db.Category.findOne({ where: condition, raw: true });
  },

  getSellerCategory(condition) {
    return db.SellerCategory.findOne({ where: condition });
  },

  sellerCreate(data) {
    return db.SellerCategory.create(data);
  },

  getSubCategory(condition) {
    return db.SubCategory.findOne({ where: condition, raw: true });
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

  getAllSubCategory(condition) {
    return db.SubCategory.findAll({ where: condition, raw: true });
  },

};

export default CategoryService;
