import db from '../database/models';

const PlanService = {
  async getAll(condition) {
    return db.Plan.findAll({ where: condition, raw: true });
  },

  async getOne(condition) {
    return db.Plan.findOne({ where: condition, raw: true });
  },

  async create(data) {
    return db.Plan.create(data, { raw: true });
  },

  async update(data, condition) {
    const faq = await db.Plan.update(data, {
      where: condition,
      returning: true,
      raw: true,
      plain: true
    });
    return faq[1];
  },

  async delete(condition) {
    await db.Plan.destroy({ where: condition });
  }
};

export default PlanService;
