import Send from '../utils/res.utils';
import AboutService from '../services/about.service';
import Get from '../utils/req.utils';

const About = {

  async create(req, res) {
    req.body.UserId = req.user.id;
    const about = await AboutService.create(req.body);
    return Send(res, 201, 'question created successfully', about);
  },

  async update(req, res) {
    const updateData = Get.updateAboutBody(req);
    const about = await AboutService.update(updateData, { id: req.params.id });
    return Send(res, 201, 'question updated successfully', about);
  }
};

export default About;
