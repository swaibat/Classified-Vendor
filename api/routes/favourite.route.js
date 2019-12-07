import express from 'express';
import userMiddleware from '../middleware/user.middleware';
import FavController from '../controller/favourite.controller';
import FavMiddleware from '../middleware/favourite.middleware';
import ProductMiddleware from '../middleware/product.middleware';
import Validate from '../validation';

const router = express.Router();

router.get('/', userMiddleware.verifyToken, FavController.getFavs);

router.post(
  '/:id',
  Validate.params,
  ProductMiddleware.checkExist,
  userMiddleware.verifyToken,
  FavMiddleware.checkFavExist,
  FavController.addToFavourite
);

router.delete(
  '/:id',
  Validate.params,
  userMiddleware.verifyToken,
  FavMiddleware.checkNoFavExist,
  FavController.romoveFromFavourite
);

export default router;
