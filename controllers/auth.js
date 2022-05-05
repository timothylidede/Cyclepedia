const User = require('../models/user');
const ErrorResponse = require('../utils/errorResponse')

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
      <h1>You have requested a password reset</h1>
      <p>Please click the link below to reset your password</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;
    try {
      
    } catch (error) {
      
    }
  }catch(error){

  }
};

exports.resetpassword = (req, res, next) => {

};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({
    success: true, 
    token
  })
}