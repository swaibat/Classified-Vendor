import Send from '../utils/res.utils';
import FavService from '../services/favourite.service';
import Get from '../utils/req.utils';

const Faq = {
  async getFavs(req, res) {
    const favs = await FavService.getAll({ UserId: req.user.id });
    return Send(res, 200, undefined, favs);
  }
  // async create(req, res) {
  //   const { answer, question } = req.body;
  //   const faq = await FaqService.create({ answer, question });
  //   return Send(res, 201, 'question created successfully', faq);
  // },

  // async update(req, res) {
  //   const updateData = Get.updateFaqBody(req);
  //   const faq = await FaqService.update(updateData, { id: req.params.id });
  //   return Send(res, 201, 'question updated successfully', faq);
  // },

  // async delete(req, res) {
  //   FaqService.delete({ id: req.params.id });
  //   return Send(res, 201, 'question deleted successfully');
  // }
};

export default Faq;
