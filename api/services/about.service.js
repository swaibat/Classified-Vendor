import db from '../database/models';

const AboutService = {
  async getAll(condition) {
    return db.About.findAll({ where: condition, raw: true });
  },

  async getOne(condition) {
    return db.About.findOne({ where: condition, raw: true });
  },

  async create(data) {
    return db.About.create(data, { raw: true });
  },

  async update(data, condition) {
    const faq = await db.About.update(data, {
      where: condition,
      returning: true,
      raw: true,
      plain: true
    });
    return faq[1];
  },
};

export default AboutService;
