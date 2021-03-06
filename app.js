const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
let port = process.env.PORT || 3000
require('dotenv/config')

app.use(cors())

app.use(bodyParser.json())
//import ruotes

const placesRoute = require('./routes/places')

app.use('/data', placesRoute)


//connect to db
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("db connected:", mongoose.connection.readyState)
})


//startin server
app.listen(port)
