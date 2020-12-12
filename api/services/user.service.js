import db from '../database/models';

const UserService = {
  async getUser(condition) {
    return db.User.findOne({
      where: condition.username && condition.username.match('@') ? { email: condition.username } : condition,
      include: [
        { model: db.Rating },
        { model: db.Product },
        { model: db.About },
        { model: db.Favourite },
        {
          model: db.Role,
          attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
        }
      ]
    });
  },
  async deleteUser(condition) {
    return db.User.destroy({
      where: condition
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
      attributes: { exclude: 'password' },
      include: [
        { model: db.Rating },
        {
          model: db.Role,
          attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
        }
      ]
    });
  },

  async findOrCreateUser(userData, email) {
    const [data] = await db.Users.findOrCreate({
      where: { email },
      defaults: userData.user,
      raw: true
    });
    return data;
  },
};

export default UserService;
