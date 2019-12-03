import sgMail from '@sendgrid/mail';
import settingService from '../services/settings.service';
import '@babel/polyfill';

const settings = async () => {
  const { sgKey } = await settingService.get({ id: 1 });
  return sgKey;
};

export default settings();
