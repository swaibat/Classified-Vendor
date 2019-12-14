import db from '../database/models';

const UserService = {
  async getUser(condition) {
    return db.User.findOne({
      where: condition,
      include: [{ model: db.Rating }]
    });
  },

  async updateUser(data, condition) {
    const result = await db.User.update(data, {
      where: condition,
      returning: true,
      raw: true,
      plain: true
    });
    return result[1];
  },

  async updateActivity(data, condition) {
    const result = await db.userActivity.update(data, {
      where: condition,
      returning: true,
      raw: true,
      plain: true
    });
    return result[1];
  },

  createUser(user) {
    return db.User.create(user);
  },

  getAllVendors(condition) {
    return db.User.findAll({
      where: condition,
      include: [{ model: db.Rating }],
      attributes: { exclude: 'password' }
    });
  },

  getAllUsers(condition) {
    return db.User.findAll({
      where: condition,
      include: [{ model: db.Rating }],
      attributes: { exclude: 'password' }
    });
  }
};

export default UserService;
