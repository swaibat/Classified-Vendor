import db from '../database/models';

const SettingService = {
  async get(condition) {
    return db.Setting.findOne({ where: condition });
  }
};

export default SettingService;
