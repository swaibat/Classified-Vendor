import express from 'express';
import fileUpload from 'express-fileupload';
import userMiddleware from '../middleware/user.middleware';
import productController from '../controller/product.controller';
import ProductMiddleware from '../middleware/product.middleware';
import Validate from '../validation';

const router = express.Router();

router.use(fileUpload());

router.post(
  '/',
  userMiddleware.verifyToken,
  Validate.product,
  ProductMiddleware.checkIfNameExist,
  Validate.images,
  productController.create
);

router.get('/', productController.getAll);
router.get('/admin', productController.getAll);

router.get(
  '/company/:co',
  userMiddleware.getCoByUser,
  productController.getAllCoPrdcts
);

router.get(
  '/:id/company/:co',
  userMiddleware.getCoByUser,
  productController.getCoPrdct
);

router.patch(
  '/:id',
  userMiddleware.verifyToken,
  Validate.params,
  Validate.updateProduct,
  ProductMiddleware.checkExist,
  Validate.images,
  productController.update
);

router.get(
  '/:id',
  ProductMiddleware.checkExist,
  productController.getOne
);

router.delete(
  '/:id',
  userMiddleware.verifyToken,
  Validate.params,
  ProductMiddleware.checkExist,
  productController.delete
);

export default router;
