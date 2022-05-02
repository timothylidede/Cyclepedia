const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const UserSchema = new mongoose.Schema(
  {
    fullname: { 
      type: String, 
      required: [true, "Please provide your full name"] 
    },
    email: { 
      type: String, 
      required: [true, "Please provde an email"], 
      unique: [true, "An account with this email already exists"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email"
      ]
    },
    phonenumber: { 
      type: String, 
      required: [true, "Phone number is required"] ,
    },
    password: { 
      type: String,
      required: [true, "Please enter a password"],
      minlength: 6,
      select: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
  },
  {timestamps: true},
  { collecton: "users" }
);

UserSchema.pre("save", async function (next){
  if(!this.isModified('password')){
    next()
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPasswords = async function(password){
  return await bcrypt.compare(password, this.password)
};

UserSchema.methods.getSignedToken = function (){
  return jwt.sign({
    id: this._id
  },
    process.env.JWT_SECRET, 
    {
      expiresIn: process.env.JWT_EXPIRE,
    });
};

UserSchema.methods.getResetPasswordToken = function (){
  const resetToken = crypto.randomBytes(20).toString('hex');

  this.resetPasswordToken = crypto
  .createHash('sha256')
  .update(resetToken)
  .digest('hex');

  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

  return resetToken;
}

const model = mongoose.model("User", UserSchema);

module.exports = model;
