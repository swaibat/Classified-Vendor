
import CategoryService from '../services/category.service';
import Response from '../utils/res.utils';

const categoryMiddleware = {
  async checkExist(req, res, next) {
    const category = req.user.roleId === 1
      ? await CategoryService.getCategory({ name: req.body.name })
      : await CategoryService.getSellerCategory({ name: req.body.name });
    if (category) Response(res, 409, 'Category already exists');
    next();
  },

  async checkSubExist(req, res, next) {
    const subCat = req.user.roleId === 1
      ? await CategoryService.getSubCategory({ name: req.body.name })
      : await CategoryService.getSellerSubCategory({ name: req.body.name });
    if (subCat) Response(res, 409, 'Sub-category already exists');
    next();
  },

  async checkNoExist(req, res, next) {
    const cat = req.user.roleId === 1
      ? await CategoryService.getCategory({ id: req.params.id })
      : await CategoryService.getSellerCategory({ id: req.params.id });
    if (!cat) Response(res, 409, 'Category does not exists');
    next();
  },

};

export default categoryMiddleware;
