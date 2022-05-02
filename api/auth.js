const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.use(express.json());

router.post("/api/register", async (request, response) => {
  console.log(request.body);
  try {
    request.body.form.password = await bcrypt.hash(request.body.form.password, 10 )
    const user = await User.create(request.body.form);
    response.json({ status: "ok", user });
  } catch (error) {
    console.log(error);
    response.json({ status: "error", error });
  }
});


router.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.form.email
  });
  
  if(!user){
    return {status: 'error', error: 'User with that email does not exist'};
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.form.password,
    user.password
  )

  if(isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      'secret123'
    );
    return res.json({status: 'ok', user: token});
  } else{
    return res.json({ status: 'error', user: false})
  }
});

module.exports = router;
