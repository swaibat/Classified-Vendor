import db from '../database/models';

const SettingService = {
  async get(condition) {
    return db.Setting.findOne({ where: condition });
  },
  async getOne() {
    return db.Setting.findOne({ where: { id: 1 } });
  },

  async update(data) {
    const curr = await db.Setting.update(data, {
      where: { id: 1 },
      returning: true,
      raw: true,
      plain: true
    });
    return curr[1];
  }
};

export default SettingService;
