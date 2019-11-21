import express from 'express';
import fileUpload from 'express-fileupload';
import userMiddleware from '../middleware/user.middleware';
import productController from '../controller/product.controller';
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
  Validate.updateProduct,
  Validate.images,
  productController.update);


export default router;
