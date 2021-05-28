const express = require('express')
const router = express.Router()
const Place = require('../models/Place')


//return all places


router.get('/', async(req, res) => {
    try{
        const places = await Place.find()
        res.json(places)
    }catch(err){
        res.json({message: err})
    }
})

//save a place
router.post('/',async (req, res) => {
    const place = new Place({
        data:req.body.data
    })
    
    try{

        const saved = await place.save()
        res.json(saved)
    }catch(err){
        res.json({message: err})
    }
})

//return specifc place

router.get('/:placeId', async (req, res) => {
    try{

        const place = await Place.findById(req.params.placeId)
        res.json(place)
    }catch(err){
        res.json({message:err})
    }
})

//delete specifc place

router.delete('/:placeId', async (req, res) => {
    try{

        const removedPlace = await Place.remove({_id:req.params.placeId})
        res.json(removedPlace)

    }catch(err){
        res.json({message:err})
    }
})

//update specifc place

router.patch('/:placeId', async (req, res) => {
    try{

        const updatedPlace = await Place.updateOne({_id:req.params.placeId}, {$set:{name:req.body.name}})
        res.json(updatedPlace)
        
    }catch(err){
        res.json({message:err})
    }
})


module.exports = router