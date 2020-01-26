import express from 'express';
import userMiddleware from '../middleware/user.middleware';
import PlanController from '../controller/plan.controller';
import PlanMiddleware from '../middleware/plan.middleware';
import Validate from '../validation';

const router = express.Router();

router.get('/', PlanController.getPlans);

router.post(
  '/',
  userMiddleware.verifyToken,
  PlanMiddleware.checkPlanExist,
  PlanController.create
);

router.patch(
  '/:id',
  Validate.params,
  userMiddleware.verifyToken,
  PlanMiddleware.checkNoPlanExist,
  PlanController.update
);

router.delete(
  '/:id',
  Validate.params,
  userMiddleware.verifyToken,
  PlanMiddleware.checkNoPlanExist,
  PlanController.delete
);

export default router;
