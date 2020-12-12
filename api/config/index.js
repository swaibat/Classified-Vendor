import nodemailer from 'nodemailer';
import twilio from 'twilio';
import dotenv from 'dotenv';
import '@babel/polyfill';

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;
export const serviceId = process.env.TWILIO_SERVICEID;
export const client = new twilio(accountSid, authToken);

const SGKey = process.env.SENDGRID_API_KEY;

export const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.AUTH_MAIL_USER,
    pass: process.env.AUTH_MAIL_PASSWORD,
  },
});

export default SGKey;
