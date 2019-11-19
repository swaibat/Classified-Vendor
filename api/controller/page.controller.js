import Send from '../utils/res.utils';
// import Get from '../utils/req.utils';
import PageService from '../services/page.service';

const Product = {
  async get(req, res) {
    const page = await PageService.get({ id: 1 });
    return Send(res, 200, undefined, page);
  },
};

export default Product;
