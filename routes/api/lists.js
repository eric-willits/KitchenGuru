const express = require("express");
const router = express.Router();

//import auth middleware
const auth = require('../../middleware/auth');

//List Model
//const List = require("../../models/List");

//UserModel
const User = require("../../models/User");

//get all lists
router.get("/", auth, (req, res) => {
    User.findById(req.user.id)
        .then(user => res.json(user.lists))
})

//post new list
router.put("/addlist", auth, (req, res) => {
    const newList = {
        name: req.body.name,
        recipes: req.body.recipes,
        createdAt: new Date()
    };

    User.findById(req.user.id)
        .then(user => {
            user.lists.push(newList);
            user.save().then(user => res.json(user.lists));
        })
})

//delete list
router.put("/deletelist", auth, (req, res) => {
    User.findById(req.user.id).
        then(user => {
            const index = user.lists.indexOf(list => list.createdAt == req.body.createdAt);
            user.lists.splice(index, 1);
            user.save().then(user => res.json(user.lists));
        })
})

module.exports = router;