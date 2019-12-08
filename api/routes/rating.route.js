// import express from 'express';
// import userMiddleware from '../middleware/user.middleware';
// import RatingController from '../controller/rating.controller';
// import RatingMiddleware from '../middleware/rating.middleware';
// import Validate from '../validation';

// const router = express.Router();

// router.get('/', RatingController.getRatings);

// router.post(
//   '/',
//   Validate.rating,
//   userMiddleware.verifyToken,
//   RatingMiddleware.checkRatingExist,
//   RatingController.create
// );

// router.patch(
//   '/:id',
//   Validate.params,
//   userMiddleware.verifyToken,
//   RatingMiddleware.checkNoRatingExist,
//   RatingController.update
// );

// export default router;
