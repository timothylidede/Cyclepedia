const User = require("../models/user");
const Product = require("../models/product");
const Order = require("../models/order");

exports.addtocart = (req, res) => {
  User.findOne({ _id: req.user._id }, (err, userInfo) => {
    let duplicate = false;
    userInfo.cart.forEach((item) => {
      if (item.id == req.query.productId) {
        duplicate = true;
      }
    });

    if (duplicate) {
      User.findOneAndUpdate(
        { _id: req.user._id, "cart.id": req.query.productId },
        { $inc: { "cart.$.quantity": 1 } },
        { new: true },
        (err, userInfo) => {
          if (err) return res.json({ success: false, err });
          res.status(200).json(userInfo.cart);
        }
      );
    } else {
      User.findOneAndUpdate(
        { _id: req.user._id },
        {
          $push: {
            cart: {
              id: req.query.productId,
              quantity: 1,
              date: Date.now(),
            },
          },
        },
        { new: true },
        (err, userInfo) => {
          if (err) return res.json({ success: false, err });
          res.status(200).json(userInfo.cart);
        }
      );
    }
  });
};

exports.reducecart = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id, "cart.id": req.query.productId },
    { $inc: { "cart.$.quantity": -1 } },
    { new: true },
    (err, userInfo) => {
      if (err) return res.json({ success: false, err });
      res.status(200).json(userInfo.cart);
    }
  );
};

exports.removefromcart = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    {
      $pull: { cart: { id: req.query.productId } },
    },
    { new: true },
    (err, userInfo) => {
      let cart = userInfo.cart;
      return res.status(200).json({ cart });
    }
  );
};

exports.cartinfo = (req, res) => {
  const { fullname } = req.user;
  const name = fullname.split(" ")[0];

  User.findOne({ _id: req.user._id }, (err, userInfo) => {
    let cart = userInfo.cart;
    let array = cart.map((item) => {
      return item.id;
    });

    Product.find({ _id: { $in: array } }).exec((err, productDetails) => {
      if (err) return res.status(400).send(err);
      return res
        .status(200)
        .json({ success: true, cart, productDetails, name });
    });
  });
};

exports.completeorder = async (req, res) => {
  console.log(req.body);
  try {
    const order = await Order.create(req.body);
    const userInfo = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $set: { cart: [] },
      },
      { new: true }
    );
    res.json({ status: "ok", order, userInfo });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error });
  }
};

exports.orderhistory = async (req, res) => {
  try {
    const orderhistory = await Order.find({ order_by: req.user._id });
    res.json({ status: "ok", orderhistory });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error });
  }
};
