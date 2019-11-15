import EmailTemp from '../utils/email.templates/verify';


const EmailService = {
  verifyUser(req) {
    const title = 'Email Verification';
    return {
      from: process.env.SENDER,
      subject: title,
      html: EmailTemp(req, title, 'Click the button below to verify your email address'),
    };
  }
};


export default EmailService;
