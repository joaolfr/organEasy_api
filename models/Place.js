const mongoose = require('mongoose')


const PlaceSchema = mongoose.Schema({
    data:{type:Array},
    
})

module.exports = mongoose.model('Place', PlaceSchema)