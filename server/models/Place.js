const mongoose = require('mongoose');
const collection = require('../collections')
const placeSchema = new mongoose.Schema({
    owner:{type:mongoose.Schema.Types.ObjectId,ref:collection.USERS_COLLECTION},
    title:String,
    address:String,
    photos:[String],
    description:String,
    perks:[String],
    checkIn:Number,
    checkOut:Number,
    maxGuest:Number,
})

const placeModel = mongoose.model(collection.PLACE_COLLECTION,placeSchema);
module.exports = placeModel;