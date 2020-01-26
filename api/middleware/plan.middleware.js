import Send from '../utils/res.utils';
import PlanService from '../services/faq.service';

const Plan = {
  async checkPlanExist(req, res, next) {
    const product = await PlanService.getOne({ question: req.body.question });
    if (product) return Send(res, 409, 'question already exists');
    next();
  },

  async checkNoPlanExist(req, res, next) {
    const product = await PlanService.getOne({ id: req.params.id });
    if (!product) return Send(res, 404, 'question does not exists');
    next();
  }
};

export default Plan;
