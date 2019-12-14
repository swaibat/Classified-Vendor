import Send from '../utils/res.utils';
import RatingService from '../services/rating.service';
import Get from '../utils/req.utils';

const Rating = {
  async create(req, res) {
    const { feedback, VendorId, count } = req.body;
    const rating = await RatingService.create({ feedback, VendorId, count });
    return Send(res, 201, 'question created successfully', rating);
  },

  async update(req, res) {
    const updateData = Get.updateRatingBody(req);
    const rating = await RatingService.update(updateData, {
      id: req.params.id
    });
    return Send(res, 201, 'question updated successfully', rating);
  }
};

export default Rating;
