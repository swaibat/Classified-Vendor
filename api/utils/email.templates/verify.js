import AuthHelper from '../auth.utils';

export default (req, title, message) => `
<table cellspacing="0" cellpadding="0" border="0" style="color:#333;background:#fff;padding:0;margin:0;width:100%;font:15px/1.25em 'Helvetica Neue',Arial,Helvetica">
        <tbody>
            <tr width="100%">
                <td valign="top" align="left" style="background:#eef0f1;font:15px/1.25em 'Helvetica Neue',Arial,Helvetica">
                    <table style="border:none;padding:0 18px;margin:50px auto;width:500px">
                        <tbody>
                            <tr width="100%" height="60">
                                <td valign="top" align="left" style="border-top-left-radius:4px;border-top-right-radius:4px;background:#27709b url() bottom left repeat-x;padding:10px 18px;text-align:center">
                                    <img height="40" width="125" src="" title="" style="font-weight:bold;font-size:18px;color:#fff;vertical-align:top">
                                </td>
                            </tr>
                            <tr width="100%">
                                <td valign="top" align="left" style="background:#fff;padding:18px">
                                    <h1 style="font-size:20px;margin:16px 0;color:#333;text-align:center">${title}</h1>
                                    <p style="font:15px/1.25em 'Helvetica Neue',Arial,Helvetica;color:#333;text-align:center"> ${message}</p>
                                        <br>
                                        <p style="font:15px/1.25em 'Helvetica Neue',Arial,Helvetica;margin-bottom:0;text-align:center;">
                                             <a href="${req.protocol}://${req.headers.host}/users/register/${AuthHelper.createToken(req.body.email)}" style="border-radius:3px;background:#3aa54c;color:#fff;display:block;font-weight:700;font-size:16px;line-height:1.25em;margin:24px auto 6px;padding:10px 18px;text-decoration:none;width:180px" target="_blank"> verify now</a> 
                                        </p>
                                        <br><br>
                                    <p style="font:14px/1.25em 'Helvetica Neue',Arial,Helvetica;color:#333">
                                         <strong>vendly</strong> It's the easiest way to organize anything, like having virtual whiteboards with superpowers. <a href="" style="color:#306f9c;text-decoration:none;font-weight:bold" target="_blank">Learn more »</a> 
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>

  `;

