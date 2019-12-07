import db from '../database/models';

const FavService = {
  async getAll(condition) {
    return db.Favourite.findAll({ where: condition, raw: true });
  }

  //   async getOne(condition) {
  //     return db.Faq.findOne({ where: condition, raw: true });
  //   },

  //   async create(data) {
  //     return db.Faq.create(data, { raw: true });
  //   },

  //   async update(data, condition) {
  //     const faq = await db.Faq.update(data, {
  //       where: condition,
  //       returning: true,
  //       raw: true,
  //       plain: true
  //     });
  //     return faq[1];
  //   },

  //   async delete(condition) {
  //     await db.Faq.destroy({ where: condition });
  //   }
};

export default FavService;
