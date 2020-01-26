import Send from '../utils/res.utils';
import PlanService from '../services/plan.service';
import Get from '../utils/req.utils';

const Plan = {
  async getPlans(req, res) {
    const plans = await PlanService.getAll();
    return Send(res, 200, undefined, plans);
  },

  async create(req, res) {
    const { answer, question } = req.body;
    const plan = await PlanService.create({ answer, question });
    return Send(res, 201, 'question created successfully', plan);
  },

  async update(req, res) {
    const updateData = Get.updatePlanBody(req);
    const plan = await PlanService.update(updateData, { id: req.params.id });
    return Send(res, 201, 'question updated successfully', plan);
  },

  async delete(req, res) {
    PlanService.delete({ id: req.params.id });
    return Send(res, 201, 'question deleted successfully');
  }
};

export default Plan;
