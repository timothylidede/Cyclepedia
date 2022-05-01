const express = require('express')
const app = express()
const cors = require('cors')
const { AppsSharp } = require('@mui/icons-material')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const { json } = require('express')

mongoose.connect('mongodb+srv://leobikuri:DgLAdz5zWgcWpFmo@cyclepedia.yzhip.mongodb.net/Cyclepedia?retryWrites=true&w=majority')

app.use(cors())
app.use(express.json())

app.listen(6969, ()=> {
    console.log('Server started on 6969')
})

app.post('/api/register', async (req, res)=> {
    console.log(req.body)
    try{
        await User.create({
            fullname: req.body.form.fullname,
            email: req.body.form.email,
            phonenumber: req.body.form.phonenumber,
            password: req.body.form.password,
        })
        res.json({ status: 'ok' })
    }catch (error){
        console.log(error)
        res.json({ status: 'error', error: 'Someting wong'})
    }
   
})

app.post('/api/login', async (req, res)=> {

    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })
    if(user){
      return res.json({ status: 'ok', user: true})  
    }else{
        return res.json({ status: 'error', user: false})
    }
    res.json({ status: 'ok' })
   
})