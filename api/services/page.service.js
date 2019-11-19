import db from '../database/models';

const ProductService = {
  async get(condition) {
    const result = await db.Page.findOne({ where: condition,
      include: [{ model: db.User,
        include: [{ model: db.Product,
          include: [{ model: db.productFile }] },
        { model: db.SellerCategory,
          include: [{ model: db.SellerSubCategory,
            include: [{ model: db.SellerSubCategoryOne }] }] }
        ] }]
    });
    return result;
  },
};
export default ProductService;
