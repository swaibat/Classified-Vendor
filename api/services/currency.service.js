import db from '../database/models';

const CurrencyService = {
  async getOne() {
    return db.Currency.findOne({ where: { id: 1 } });
  },

  async update(data) {
    const curr = await db.Currency.update(data, {
      where: { id: 1 },
      returning: true,
      raw: true,
      plain: true
    });
    return curr[1];
  }
};

export default CurrencyService;
