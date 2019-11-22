import express from 'express';
import Validate from '../validation';
import CategoryController from '../controller/category.controller';
import UserMiddleware from '../middleware/user.middleware';
import CategoryMiddleware from '../middleware/category.middleware';
import ProductController from '../controller/product.controller';

const router = express.Router();

router.get('/', CategoryController.getAll);

router.get('/:category',
  CategoryMiddleware.getByName,
  ProductController.getPrdctsByCat);

router.get('/:category/:sub',
  CategoryMiddleware.getByName,
  CategoryMiddleware.getSubByName,
  ProductController.getPrdctsBySubCat);

router.post('/',
  UserMiddleware.verifyToken,
  UserMiddleware.checkRole,
  Validate.category,
  CategoryMiddleware.checkExist,
  CategoryController.create);

router.post('/:id/sub',
  UserMiddleware.verifyToken,
  UserMiddleware.checkRole,
  Validate.category,
  Validate.params,
  CategoryMiddleware.checkNoExist,
  CategoryMiddleware.checkSubExist,
  CategoryController.createSub);


export default router;
