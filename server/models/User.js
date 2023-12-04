const mongoose = require('mongoose');
const colletion = require('../collections');
const UserSchema = new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
});

const UserModel = mongoose.model(colletion.USERS_COLLECTION, UserSchema);

module.exports = UserModel;