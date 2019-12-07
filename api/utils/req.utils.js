/* eslint-disable no-restricted-syntax */
import AuthHelper from './auth.utils';

const Requests = {
  signUp(req) {
    const {
      firstName,
      lastName,
      password,
      email,
      company,
      address,
      telephone
    } = req.body;
    const data = {
      firstName,
      lastName,
      password: AuthHelper.hashPassword(password),
      email,
      company,
      address,
      telephone
    };
    return data;
  },

  prodBody(req) {
    const { name, CategoryId, price, negotiable, description } = req.body;
    const data = {
      name,
      CategoryId,
      price,
      negotiable,
      description,
      UserId: req.user.id
    };
    return data;
  },

  adons(req) {
    const {
      name,
      CategoryId,
      price,
      negotiable,
      description,
      ...data
    } = req.body;
    return data;
  },

  pageBody(req) {
    const {
      CategoryId,
      pageTemplateId,
      UserId,
      aboutUs,
      faq,
      backdrop
    } = req.body;
    const data = {
      CategoryId,
      pageTemplateId,
      UserId,
      aboutUs,
      faq,
      backdrop
    };
    return data;
  },

  updateProdBody(req) {
    const updateData = {};
    const data = this.prodBody(req);
    for (const key in data) {
      if (data[key]) {
        updateData[key] = data[key];
      }
    }
    return updateData;
  },

  updatePageBody(req) {
    const updateData = {};
    const data = this.pageBody(req);
    for (const key in data) {
      if (data[key]) {
        updateData[key] = data[key];
      }
    }
    return updateData;
  },

  updateFaqBody(req) {
    const updateData = {};
    const { question, answer } = req.body;
    const data = { question, answer };
    for (const key in data) {
      if (data[key]) {
        updateData[key] = data[key];
      }
    }
    return updateData;
  },

  updateUserBody(req) {
    const userData = {};
    const { firstName, lastName, company, address, telephone } = req.body;
    const data = {
      firstName,
      lastName,
      company,
      address,
      telephone
    };
    for (const key in data) {
      if (data[key]) {
        userData[key] = data[key];
      }
    }
    return userData;
  }
};

export default Requests;
