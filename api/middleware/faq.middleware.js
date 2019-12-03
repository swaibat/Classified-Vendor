import Send from '../utils/res.utils';
import FaqService from '../services/faq.service';

const Faq = {
  async checkFaqExist(req, res, next) {
    const product = await FaqService.getOne({ question: req.body.question });
    if (product) return Send(res, 409, 'question already exists');
    next();
  },

  async checkNoFaqExist(req, res, next) {
    const product = await FaqService.getOne({ id: req.params.id });

    if (!product) return Send(res, 404, 'question does not exists');
    next();
  }
};

export default Faq;
