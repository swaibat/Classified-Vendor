import nodemailer from 'nodemailer';
import settingService from '../services/settings.service';
import '@babel/polyfill';

const settings = async () => {
  const { sgKey } = await settingService.get({ id: 1 });
  return sgKey;
};

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rumbiihas@gmail.com',
    pass: 'Kanyanyama01'
  }
});

export default settings();
