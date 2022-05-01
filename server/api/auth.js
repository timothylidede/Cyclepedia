const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      fullname: req.body.fullname,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "Someting wong" });
  }
});

router.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    return res.json({ status: "ok", user: true });
  } else {
    return res.json({ status: "error", user: false });
  }
  res.json({ status: "ok" });
});

module.exports = router;
