import Sequelize from 'sequelize';
import CategoryService from '../services/category.service';
import Send from '../utils/res.utils';

const { Op } = Sequelize;

const categoryMiddleware = {
  async checkExist(req, res, next) {
    const category = await CategoryService.getOne({ name: req.body.name });
    if (category) return Send(res, 409, 'Category already exists');
    req.category = category;
    next();
  },

  async checkCategoryExist(req, res, next) {
    const cat = await CategoryService.getOne({ id: req.params.id });
    if (!cat) return Send(res, 404, 'Category does not exists');
    req.category = cat;
    next();
  },

  async checkParentExists(req, res, next) {
    if (req.category.ParentId) {
      const cat = await CategoryService.getOne({ id: req.category.ParentId });
      if (!cat) return Send(res, 404, 'Parent Category does not exists');
    }
    next();
  },

  async checkParentBodyExists(req, res, next) {
    if (req.body.ParentId) {
      const cat = await CategoryService.getOne({ id: req.body.ParentId });
      if (!cat) return Send(res, 404, 'Parent Category does not exists');
    }
    next();
  },

  async getCatBySlug(req, res, next) {
    const cat = await CategoryService.getOne({ slug: req.params.slug });
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
