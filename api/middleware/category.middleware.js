
import CategoryService from '../services/category.service';
import Response from '../utils/res.utils';

const categoryMiddleware = {
  async checkExist(req, res, next) {
    const cat = await CategoryService.getCategory({ name: req.body.name });
    if (cat) Response(res, 409, 'Category already exists');
    return next();
  },

  async sellerCheckExist(req, res, next) {
    const cat = await CategoryService.getSellerCategory({ name: req.body.name });
    if (cat && cat.userId === req.user.id) Response(res, 409, 'Category already exists');
    return next();
  },

};

export default categoryMiddleware;
