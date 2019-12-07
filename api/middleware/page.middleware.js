import Send from '../utils/res.utils';
import PageService from '../services/page.service';

const Page = {
  async checkCoExist(req, res, next) {
    const page = await PageService.get({ company: req.user.company });
    if (page && page.CategoryId === req.body.CategoryId) {
      return Send(res, 409, 'We accept one website per Category');
    }
    next();
  },

  async checkCoNoExist(req, res, next) {
    const page = await PageService.get({ company: req.user.company });
    if (!page) return Send(res, 404, 'page not found');
    next();
  }
};

export default Page;
