import express from 'express';
import userMiddleware from '../middleware/user.middleware';
import FavController from '../controller/favourite.controller';
import FavMiddleware from '../middleware/favourite.middleware';
import Validate from '../validation';

const router = express.Router();

router.get('/', userMiddleware.verifyToken, FavController.getFavs);

// router.post('/',
//   userMiddleware.verifyToken,
//   FavMiddleware.checkFavExist,
//   FavController.create);

// router.patch('/:id',
//   Validate.params,
//   userMiddleware.verifyToken,
//   FavMiddleware.checkNoFavExist,
//   FavController.update);

// router.delete('/:id',
//   Validate.params,
//   userMiddleware.verifyToken,
//   FavMiddleware.checkNoFavExist,
//   FavController.delete);

export default router;
