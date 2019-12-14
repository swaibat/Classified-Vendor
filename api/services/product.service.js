/* eslint-disable array-callback-return */
import db from '../database/models';

const ProductService = {
  create(createData, req) {
    return db.Product.create(createData, {
      include: [{ model: db.productFile }],
      raw: true
    })
      .then(product => {
        const data = [];
        req.files.map(e => {
          const { name, size } = e;
          data.push({
            link: `${req.protocol}://${req.headers.host}/products/${name}`,
            size,
            ProductId: product.dataValues.id
          });
        });
        return db.productFile.bulkCreate(data);
      })
      .then(b => db.Product.findOne({
        where: { id: b[0].dataValues.ProductId },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: {
          model: db.productFile,
          attributes: { exclude: ['createdAt', 'updatedAt', 'ProductId'] }
        }
      }));
  },

  async update(product, condition) {
    return db.Product.update(product, {
      where: condition,
      returning: true,
      raw: true,
      plain: true
    }).then(b => db.Product.findOne({
      where: { id: b[1].id },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: {
        model: db.productFile,
        attributes: { exclude: ['createdAt', 'updatedAt', 'ProductId'] }
      }
    }));
  },

  get(condition) {
    return db.Product.findOne({
      where: condition,
      include: {
        model: db.productFile,
        attributes: { exclude: ['createdAt', 'updatedAt', 'ProductId'] }
      }
    });
  },

  VendorGetOwn(condition) {
    return db.Product.findAll({
      where: condition,
      include: [
        {
          model: db.productFile,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'ProductId']
          }
        }
      ]
    });
  },

  getAllPrdcts() {
    return db.Product.findAll({
      include: [
        {
          model: db.productFile,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'ProductId']
          }
        }
      ]
    });
  },

  delete(condition) {
    return db.Product.destroy({ where: condition });
  },

  getAllCoPrdcts(condition) {
    return db.Product.findAll({
      where: condition,
      include: { model: db.productFile }
    });
  },

  getCoPrdct(condition) {
    return db.Product.findOne({
      where: condition,
      include: { model: db.productFile }
    });
  }
};

export default ProductService;
