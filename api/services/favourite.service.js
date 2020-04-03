import db from '../database/models';

const FavService = {
  async getAll(condition) {
    return db.Favourite.findAll({ where: condition, raw: true });
  },

  // db.Favourite.findAll({ where: condition, raw: true })
  //     .then(fav => {
  //       fav.map(prdct => db.Product.findOne({
  //         where: { id: prdct.ProductId },
  //         raw: true
  //       }).then(product => favourites.push(product)));
  //       console.log(favourites);
  //     });

  async getOne(condition) {
    return db.Favourite.findOne({ where: condition, raw: true });
  },

  async create(data) {
    return db.Favourite.create(data, { raw: true });
  },

  async delete(condition) {
    await db.Favourite.destroy({ where: condition });
  }
};

export default FavService;
