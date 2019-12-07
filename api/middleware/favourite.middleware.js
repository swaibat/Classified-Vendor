import Send from '../utils/res.utils';
import FavService from '../services/favourite.service';

const Fav = {
  async checkFavExist(req, res, next) {
    const product = await FavService.getOne({ ProductId: req.params.id });
    if (product) return Send(res, 409, 'item already added to favourite');
    next();
  },

  async checkNoFavExist(req, res, next) {
    const product = await FavService.getOne({ ProductId: req.params.id });
    if (!product) return Send(res, 404, 'item not found');
    next();
  }
};

export default Fav;
