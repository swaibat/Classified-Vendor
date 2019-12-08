import db from '../database/models';

const RatingService = {
  async getAll(condition) {
    return db.Rating.findAll({ where: condition, raw: true });
  },

  async getOne(condition) {
    return db.Rating.findOne({ where: condition, raw: true });
  },

  async create(data) {
    return db.Rating.create(data, { raw: true });
  },

  async update(data, condition) {
    const Rating = await db.Rating.update(data, {
      where: condition,
      returning: true,
      raw: true,
      plain: true
    });
    return Rating[1];
  }
};

export default RatingService;
