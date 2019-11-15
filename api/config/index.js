import sgMail from '@sendgrid/mail';

!process.env.NODE_ENV ? sgMail.setApiKey(process.env.SENDGRID_API_KEY) : '';

export default sgMail;
