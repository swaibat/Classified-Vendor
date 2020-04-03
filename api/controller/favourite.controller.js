import Send from '../utils/res.utils';
import FavService from '../services/favourite.service';
import ProductService from '../services/product.service';

const Fav = {
  async getFavs(req, res) {
    const favs = await FavService.getAll({ UserId: req.user.id });
    const favourites = favs.map(fav => ProductService.get({ id: fav.ProductId }).then(e => e));
    Promise.all(favourites).then(allFavs => Send(res, 200, '', allFavs));
  },

  async addToFavourite(req, res) {
    const faq = await FavService.create({
      UserId: req.user.id,
      ProductId: req.params.id
    });
    return Send(res, 201, 'item added to favourite', faq);
  },

  async romoveFromFavourite(req, res) {
    FavService.delete({ ProductId: req.params.id });
    return Send(res, 201, 'item removed successfully');
  }
};

export default Fav;
