import express from 'express';
import Validate from '../validation';
import CategoryController from '../controller/category.controller';
import UserMiddleware from '../middleware/user.middleware';
import CategoryMiddleware from '../middleware/category.middleware';

const router = express.Router();

router.get('/', CategoryController.getAll);

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
