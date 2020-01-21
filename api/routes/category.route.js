import express from 'express';
import Validate from '../validation';
import CategoryController from '../controller/category.controller';
import UserMiddleware from '../middleware/user.middleware';
import CategoryMiddleware from '../middleware/category.middleware';
import ProductController from '../controller/product.controller';

const router = express.Router();

router.get('/', CategoryController.get);

router.get('/company/:co', UserMiddleware.getCoByUser, CategoryController.get);

router.get(
  '/company/:co/:id',
  Validate.params,
  CategoryMiddleware.checkCategoryExists,
  ProductController.getPrdctsByCat
);

router.get(
  '/:name',
  CategoryMiddleware.getCatByName,
  CategoryMiddleware.checkCategoryExists,
  ProductController.getPrdctsByCat
);

router.post(
  '/',
  UserMiddleware.verifyToken,
  UserMiddleware.checkRole,
  Validate.category,
  CategoryMiddleware.checkExist,
  CategoryController.create
);

router.patch(
  '/:id',
  UserMiddleware.verifyToken,
  UserMiddleware.checkRole,
  Validate.category,
  CategoryMiddleware.checkCategoryExist,
  CategoryController.update
);

router.delete(
  '/:id',
  UserMiddleware.verifyToken,
  UserMiddleware.checkRole,
  CategoryController.delete
);

export default router;
