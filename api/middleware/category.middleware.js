import Sequelize from 'sequelize';
import CategoryService from '../services/category.service';
import Send from '../utils/res.utils';

const { Op } = Sequelize;

const categoryMiddleware = {
  async checkExist(req, res, next) {
    const category = await CategoryService.getOne({ name: req.body.name });
    if (category) return Send(res, 409, 'Category already exists');
    next();
  },

  async checkCategoryExist(req, res, next) {
    const cat = await CategoryService.getOne({ id: req.params.id });
    if (!cat) return Send(res, 404, 'Category does not exists');
    req.category = cat;
    next();
  },

  async getCatByName(req, res, next) {
    if (req.params.name.match(/^[0-9]*[1-9][0-9]*$/)) {
      req.params.id = req.params.name;
      return next();
    }
    const cat = await CategoryService.getOne({ name: req.params.name });
    if (!cat) return Send(res, 404, 'Category does not exists');
    req.params.id = cat.id;
    next();
  },

  async checkCategoryExists(req, res, next) {
    const cat = await CategoryService.get({
      [Op.or]: [{ ParentId: req.params.id }, { id: req.params.id }]
    });
    if (!cat) return Send(res, 404, 'Category does not exists');
    req.category = cat;
    next();
  }
};

export default categoryMiddleware;
