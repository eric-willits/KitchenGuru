const express = require("express");
const router = express.Router();

//import auth middleware
const auth = require('../../middleware/auth');

//UserModel
const User = require("../../models/User");

//get saved recipes array
router.get("/", auth, (req, res) => {
    User.findById(req.user.id)
        .then(user => res.json(user.saved));
})

//add recipe to saved array
router.put("/saverecipe", auth, (req, res) => {
    User.findById(req.user.id)
        .then(user => {
            user.saved.push(req.body.recipe);
            user.save().then(user => res.json(user.saved));
        })
})

//remove recipe from saved array
router.put("/unsaverecipe", auth, (req, res) => {
    User.findById(req.user.id)
        .then(user => {
            const index = user.saved.indexOf(recipe => recipe.name === req.body.name);
            user.saved.splice(index, 1);
            user.save().then(user => res.json(user.saved));
        })
})

module.exports = router;