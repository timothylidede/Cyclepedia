const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect(process.env.MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log('mongodb connected')
}

module.exports = connectDB; 