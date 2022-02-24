const mongoose = require('mongoose');
require('dotenv').config()

const {
    MONGO_URL
} = process.env

mongoose.connect(MONGO_URL, ()=> {
    console.log(`Mongodb Connected on ${MONGO_URL}`)
})