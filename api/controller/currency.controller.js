import Send from '../utils/res.utils';
import CurrencyService from '../services/currency.service';

const Currency = {
  async getCurrency(req, res) {
    const curr = await CurrencyService.getOne();
    return Send(res, 200, '', curr);
  },

  async update(req, res) {
    const curr = await CurrencyService.update(req.body);
    return Send(res, 200, 'currency updated successfully', curr);
  }
};

export default Currency;
