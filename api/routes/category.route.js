import express from 'express';
import Validate from '../validation';
import CategoryController from '../controller/category.controller';
import UserMiddleware from '../middleware/user.middleware';
import CategoryMiddleware from '../middleware/category.middleware';
import ProductController from '../controller/product.controller';

const router = express.Router();

router.get('/', CategoryController.getCatAll);

router.get(
  '/company/:co',
  UserMiddleware.getCoByUser,
  CategoryController.getVendorCats
);

router.get(
  '/company/:co/:id',
  Validate.params,
  CategoryMiddleware.checkCategoryExists,
  ProductController.getPrdctsByCat
);

router.get(
  '/:id',
  Validate.params,
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

export default router;
