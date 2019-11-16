import AuthHelper from './auth.utils';

const Requests = {
  signUp(req) {
    const { firstName, lastName, password, email, company, address, telephone } = req.body;
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
    const {
      name, categoryId, subCategoryId, price, negotiable, description, email
    } = req.body;
    const data = {
      name, categoryId, subCategoryId, price, negotiable, description, owner: email
    };
    return data;
  }

};

export default Requests;
