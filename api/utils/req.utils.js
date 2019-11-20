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
      name, CategoryId, subCategoryId, price, negotiable, description,
    } = req.body;
    const data = {
      name, CategoryId, subCategoryId, price, negotiable, description, UserId: req.user.id
    };
    return data;
  },

  vehicleBody(req) {
    const {
      make, model, fuel, transmission, year, mileage, engine, color
    } = req.body;
    const data = {
      make, model, fuel, transmission, year, mileage, engine, color
    };
    return data;
  },

  pageBody(req) {
    const {
      CategoryId, SubCategoryId, pageTemplateId, UserId
    } = req.body;
    const data = {
      CategoryId, SubCategoryId, pageTemplateId, UserId
    };
    return data;
  }
};

export default Requests;
