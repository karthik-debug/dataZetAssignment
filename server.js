const express = require('express')
require('./db')
require('dotenv').config()
const router = require('./routes')
const app = express()
const {
  PORT
} = process.env

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router)

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})
