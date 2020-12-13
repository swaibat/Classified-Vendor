/* eslint-disable no-unused-vars */
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
          const { size, link, mimetype } = e;
          data.push({
            name: link,
            size,
            type: mimetype,
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

  async update(product, condition, req) {
    req.body.removedImages
      .split(',')
      .map(e => db.productFile.destroy({ where: { id: e } }));
    return db.Product.update(product, {
      where: condition,
      returning: true,
      raw: true,
      plain: true
    }).then(x => {
      const data = [];
      req.files.map(e => {
        const { name, size } = e;
        data.push({
          link: `${req.protocol}://${req.headers.host}/products/${name}`,
          size,
          ProductId: x[1].id
        });
      });
      return db.productFile.bulkCreate(data);
    });
  },

  get(condition) {
    let data = {};
    return db.Product.findOne({
      where: condition,
      include: [
        {
          model: db.productFile,
          attributes: { exclude: ['createdAt', 'updatedAt', 'ProductId'] }
        },
        {
          model: db.Category,
          attributes: { exclude: ['createdAt', 'updatedAt', 'UserId'] }
        }
      ]
    })
      .then(elem => {
        data = JSON.parse(JSON.stringify(elem));
        if (data.Category && data.Category.ParentId) {
          return db.Category.findOne({ where: { id: data.Category.ParentId } });
        }
      })
      .then(e => {
        if (data.Category.ParentId) {
          const {
            ParentId,
            UserId,
            createdAt,
            updatedAt,
            ...parent
          } = e.dataValues;
          data.Category.parent = parent;
        }
        return data;
      });
  },

  findOne(condition) {
    return db.Product.findOne({ where: condition });
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
