const User = require("../models/user");
const Product = require("../models/product");

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
  User.findOne({ _id: req.user._id }, (err, userInfo) => {
    let cart = userInfo.cart;
    let array = cart.map((item) => {
      return item.id;
    });
    Product.find({ _id: { $in: array } }).exec((err, productDetails) => {
      if (err) return res.status(400).send(err);
      return res.status(200).json({ success: true, productDetails, cart });
    });
  });
};
