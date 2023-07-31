const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const appRouter = require('./routes/router')
require('dotenv').config();

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/mydb')

// Use the router middleware for the specific route
app.use('/', appRouter);

app.listen(process.env.PORT || 3006, ()=>{
    console.log(`Server is Running ${process.env.PORT}`)
})