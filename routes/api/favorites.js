const express = require('express');
const router = express.Router();

//Require Middleware
const auth = require("../../middleware/auth");

//Require User Model
const User = require("../../models/User");


//get favorites array
router.get("/", auth, (req, res) => {
    User.findById(req.user.id)
        .then(user => res.json(user.favorites));
})


//add recipe to favorites array
router.put("/addrecipe", auth, (req, res) => {
    User.findById(req.user.id)
        .then(user => {
            user.favorites.push(req.body.recipe);
            user.save().then(user => res.json(user.favorites));
        })
})


//remove recipe from favorites array
router.put("/removerecipe", auth, (req, res) => {
    User.findById(req.user.id)
        .then(user => {
            const index = user.favorites.indexOf(recipe => recipe.name === req.body.name);
            user.favorites.splice(index, 1);
            user.save().then(user => res.json(user.favorites));
        })
})

module.exports = router;