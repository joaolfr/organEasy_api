const mongoose = require('mongoose')


const PlaceSchema = mongoose.Schema({
    name:{type:String},
    
})

module.exports = mongoose.model('Place', PlaceSchema)