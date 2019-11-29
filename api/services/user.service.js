import db from '../database/models';

const UserService = {
  async getUser(condition) {
    return db.User.findOne({ where: condition, raw: true });
  },

  async createUser(user) {
    const result = await db.User.create(user);
    return result.get({ plain: true });
  },

  getAllVendors(condition) {
    return db.User.findAll({ where: condition,
      raw: true,
      attributes: { exclude: 'password' }
    });
  }

};

export default UserService;
