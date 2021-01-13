const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    lists: [],
    saved: [],
    favorites: []
})

const User = mongoose.model("User", UserSchema);

module.exports = User;