import Send from '../utils/res.utils';
import AboutService from '../services/about.service';

const About = {
  async checkAboutExist(req, res, next) {
    const about = await AboutService.getOne({ UserId: req.user.id });
    if (about) return Send(res, 409, 'about already exists');
    next();
  },

  async checkNoAboutExist(req, res, next) {
    const about = await AboutService.getOne({ id: req.params.id });
    if (!about) return Send(res, 404, 'about page doesnt exist');
    next();
  }
};

export default About;
