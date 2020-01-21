import db from '../database/models';

const CategoryService = {
  get(condition) {
    return db.Category.findAll({ where: condition, raw: true });
  },

  create(data) {
    return db.Category.create(data);
  },

  async update(data, condition) {
    const category = await db.Category.update(data, {
      where: condition,
      returning: true,
      raw: true,
      plain: true
    });
    return category[1];
  },

  getOne(condition) {
    return db.Category.findOne({ where: condition, raw: true });
  },

  delete(condition) {
    return db.Category.destroy({ where: condition, raw: true });
  }
};

export default CategoryService;
