import express from 'express';
import fileUpload from 'express-fileupload';
import userMiddleware from '../middleware/user.middleware';
import productController from '../controller/product.controller';
import ProductMiddleware from '../middleware/product.middleware';
import Validate from '../validation';

const router = express.Router();

router.use(fileUpload());

router.post('/',
  userMiddleware.verifyToken,
  Validate.product,
  Validate.images,
  productController.create);

router.patch('/:id',
  userMiddleware.verifyToken,
  Validate.params,
  Validate.updateProduct,
  ProductMiddleware.checkExist,
  Validate.images,
  productController.update);

router.get('/:id',
  Validate.params,
  ProductMiddleware.checkExist,
  productController.getOne);


export default router;
