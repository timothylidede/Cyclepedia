const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect("mongodb+srv://leobikuri:DgLAdz5zWgcWpFmo@cyclepedia.yzhip.mongodb.net/Cyclepedia?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log('mongodb connected')
}

module.exports = connectDB; 