const mongoose = require('mongoose')

const setUpDB = () => {
    mongoose.connect('mongodb://localhost:27017/oct-url-shortener', { useNewUrlParser: true , useUnifiedTopology: true })
        .then(() => {
            console.log('connected to db')
        })
}

module.exports = setUpDB