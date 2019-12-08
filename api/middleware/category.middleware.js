import Sequelize from 'sequelize';
import CategoryService from '../services/category.service';
import Send from '../utils/res.utils';

const { Op } = Sequelize;

const categoryMiddleware = {
  async checkExist(req, res, next) {
    const category = req.user.roleId === 1
      ? await CategoryService.getCategory({ name: req.body.name })
      : await CategoryService.getVendorCategory({ name: req.body.name });
    if (category) return Send(res, 409, 'Category already exists');
    next();
  },

  async checkCategoryExists(req, res, next) {
    const cat = await CategoryService.getAllCats({
      [Op.or]: [{ ParentId: req.params.id }, { id: req.params.id }]
    });
    if (!cat) return Send(res, 404, 'Category does not exists');
    req.category = cat;
    next();
  }
};

export default categoryMiddleware;
