import express from 'express';
import userMiddleware from '../middleware/user.middleware';
import FaqController from '../controller/faq.controller';
import FaqMiddleware from '../middleware/faq.middleware';
import Validate from '../validation';

const router = express.Router();

router.get('/', FaqController.getFaqs);

router.post('/',
  userMiddleware.verifyToken,
  FaqMiddleware.checkFaqExist,
  FaqController.create);

router.patch('/:id',
  Validate.params,
  userMiddleware.verifyToken,
  FaqMiddleware.checkNoFaqExist,
  FaqController.update);

router.delete('/:id',
  Validate.params,
  userMiddleware.verifyToken,
  FaqMiddleware.checkNoFaqExist,
  FaqController.delete);

export default router;
