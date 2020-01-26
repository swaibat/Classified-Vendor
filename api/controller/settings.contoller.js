import Send from '../utils/res.utils';
import SettingService from '../services/settings.service';

const Settings = {
  async getSettings(req, res) {
    const curr = await SettingService.getOne();
    return Send(res, 200, '', curr);
  },

  async update(req, res) {
    const curr = await SettingService.update(req.body);
    return Send(res, 200, 'settings.service updated successfully', curr);
  }
};

export default Settings;
