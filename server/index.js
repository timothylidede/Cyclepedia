const express = require('express')
const app = express()
const cors = require('cors')
const { AppsSharp } = require('@mui/icons-material')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const { json } = require('express')
const jwt = require('jsonwebtoken')

app.use(cors());
app.use(express.json());

app.use(require("./api/auth"));
app.use(require("./api/product"));

<<<<<<< HEAD
app.listen(5000, () => {
  console.log("Server started on 5000");
});
=======
//Our applicatoin port
app.listen(6969, ()=> {
    console.log('Server started on 6969')
})
>>>>>>> c637d855b5f160bd2c12eec290d43ad1102b207d

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});

<<<<<<< HEAD
mongoose.connection.on("error", (err) => {
  console.log("error connecting");
});
=======
    const user = await User.findOne({
        email: req.body.form.email,
        password: req.body.form.password,
    })
    if(user){
        const token = jwt.sign({
            fullname: user.fullname,
            email: user.email,
        }, 'secret')
      return res.json({ status: 'ok', user: token})  
    }else{
        return res.json({ status: 'error', user: false})
    }
    res.json({ status: 'ok' })
   
})
>>>>>>> c637d855b5f160bd2c12eec290d43ad1102b207d
