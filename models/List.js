const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ListSchema = new Schema({
    recipes: []
},
{ timestamps: true})

const List = mongoose.model("List", ListSchema);

module.exports = List;
