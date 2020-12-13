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
  '/:slug',
  CategoryMiddleware.getCatBySlug,
  CategoryMiddleware.checkCategoryExists,
  ProductController.getPrdctsByCat
);

router.post(
  '/',
  UserMiddleware.verifyToken,
  Validate.category,
  CategoryMiddleware.checkExist,
  CategoryMiddleware.checkParentBodyExists,
  CategoryController.create
);

router.patch(
  '/:id',
  UserMiddleware.verifyToken,
  CategoryMiddleware.checkCategoryExist,
  CategoryMiddleware.checkParentExists,
  UserMiddleware.checkRole,
  Validate.category,
  CategoryController.update
);

router.delete(
  '/:id',
  UserMiddleware.verifyToken,
  CategoryMiddleware.checkCategoryExist,
  UserMiddleware.checkRole,
  CategoryController.delete
);

export default router;
