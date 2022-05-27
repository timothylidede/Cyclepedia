const User = require('../models/user');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

exports.register = async (req, res, next) => {
  const { firstname, lastname, phonenumber, email, password} = req.body;
  const fullname = `${firstname} ${lastname}`
  try{ 
    const user = await User.create({
      fullname, 
      phonenumber, 
      email, 
      password
    });

    sendToken(user, 201, res)
  } catch(error){
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if(!email || !password){
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try{
    const user = await User.findOne({ email }).select('+password');

    if(!user){
      return next(new ErrorResponse('Invalid Credentials', 401));
    }

    const isMatch = await user.matchPasswords(password);

    if(!isMatch){
      return next(new ErrorResponse('Invalid Credentials', 400));
    }

    sendToken(user, 200, res)

  }catch (error){
    res.status(500).json({
      success: false,
      error: error.message
    })
  }

};

exports.forgotpassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email })

    if(!user){
      return next(new ErrorResponse("Email could not be sent", 404));
    }

    const resetToken = user.getResetPasswordToken();

    await user.save();

    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
    
    const message = `
    <!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
        <style>
            * {
                box-sizing: border-box
            }
    
            body {
                margin: 0;
                padding: 0
            }
    
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important
            }
    
            #MessageViewBody a {
                color: inherit;
                text-decoration: none
            }
    
            p {
                line-height: inherit
            }
    
            @media (max-width:760px) {
                .icons-inner {
                    text-align: center
                }
    
                .icons-inner td {
                    margin: 0 auto
                }
    
                .row-content {
                    width: 100% !important
                }
    
                .image_block img.big {
                    width: auto !important
                }
    
                .column .border {
                    display: none
                }
    
                table {
                    table-layout: fixed !important
                }
    
                .stack .column {
                    width: 100%;
                    display: block
                }
            }
        </style>
    </head>
    
    <body style="background-color:#fff;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none">
        <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;background-image:url(https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-91l33coeqva/editor_images/Registrationbg.png)">
            <tbody>
                <tr>
                    <td>
                        <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                            role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:740px"
                                            width="740">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%"
                                                        style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                        <table class="image_block" width="100%" border="0" cellpadding="0"
                                                            cellspacing="0" role="presentation"
                                                            style="mso-table-lspace:0;mso-table-rspace:0">
                                                            <tr>
                                                                <td style="width:100%;padding-right:0;padding-left:0">
                                                                    <div align="center" style="line-height:10px"><img
                                                                            class="big"
                                                                            src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-91l33coeqva/editor_images/logo.png"
                                                                            style="display:block;height:auto;border:0;width:740px;max-width:100%"
                                                                            width="740"></div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="heading_block" width="100%" border="0" cellpadding="0"
                                                            cellspacing="0" role="presentation"
                                                            style="mso-table-lspace:0;mso-table-rspace:0">
                                                            <tr>
                                                                <td style="width:100%;text-align:center">
                                                                    <h1
                                                                        style="margin:0;color:#ea4f24;font-size:23px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:120%;text-align:center;direction:ltr;font-weight:700;letter-spacing:normal;margin-top:0;margin-bottom:0">
                                                                        <span class="tinyMce-placeholder">Password Reset
                                                                            Request</span></h1>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                            role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:740px"
                                            width="740">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%"
                                                        style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                        <table class="paragraph_block" width="100%" border="0"
                                                            cellpadding="10" cellspacing="0" role="presentation"
                                                            style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        style="color:#000;font-size:14px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-weight:400;line-height:120%;text-align:center;direction:ltr;letter-spacing:0">
                                                                        <p style="margin:0;margin-bottom:16px">Please click
                                                                            the link below to reset your password</p>
                                                                        <p style="margin:0">
                                                                            <a href=${resetUrl} target="_blank"
                                                                                style="text-decoration: underline; color: #ea4f24;"
                                                                                rel="noopener">${resetUrl}</a>
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                            role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:740px"
                                            width="740">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%"
                                                        style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                        <table class="icons_block" width="100%" border="0" cellpadding="0"
                                                            cellspacing="0" role="presentation"
                                                            style="mso-table-lspace:0;mso-table-rspace:0">
                                                            <tr>
                                                                <td
                                                                    style="vertical-align:middle;color:#9d9d9d;font-family:inherit;font-size:15px;padding-bottom:5px;padding-top:5px;text-align:center">
                                                                    <table width="100%" cellpadding="0" cellspacing="0"
                                                                        role="presentation"
                                                                        style="mso-table-lspace:0;mso-table-rspace:0">
                                                                        <tr>
                                                                            <td
                                                                                style="vertical-align:middle;text-align:center">
                                                                                <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                                <!--[if !vml]><!-->
                                                                                <table class="icons-inner"
                                                                                    style="mso-table-lspace:0;mso-table-rspace:0;display:inline-block;margin-right:-4px;padding-left:0;padding-right:0"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    role="presentation">
                                                                                    <!--<![endif]-->
    
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table><!-- End -->
    </body>
    
    </html>
    `;
    try {
      await sendEmail({
        to:user.email,
        subject: "Password Reset Request",
        text: message
      });

      res.status(200).json({
        success: true,
        data: "Email sent"
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();
      return next(new ErrorResponse("Email could not be sent"), 500);
    }
  }catch(error){
    return next(error);
  }
};

exports.resetpassword = async (req, res, next) => {
  const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");
  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: {$gt: Date.now()}
    });

    if(!user){
      return next(new ErrorResponse("Invalid Reset Token"), 400);
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    return res.status(201).json({
      success: true,
      data: "Password Reset Successful"
    });
  } catch (error) {
    next(error); 
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({
    success: true, 
    token
  })
}