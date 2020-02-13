import nodemailer from 'nodemailer';
import twilio from 'twilio';
import settingService from '../services/settings.service';
import '@babel/polyfill';

const accountSid = 'AC2ee358656db3b838744a4997bb935c87'; // Your Account SID from www.twilio.com/console
const authToken = '184af9b5d00d18d72b1c12b40af2c7f7';
export const serviceId = 'VAabae71c3fc0ac7011b7c4ef617672ccf';
export const client = new twilio(accountSid, authToken);

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
