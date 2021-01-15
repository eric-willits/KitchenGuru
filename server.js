const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const path = require("path");

//Require Routes
const auth = require("./routes/api/auth");
const lists = require("./routes/api/lists");
const saved = require("./routes/api/saved");
const favorites = require("./routes/api/favorites");

//Initialize app
const app = express();
app.use(express.json());

//DB Config
const db = config.get("mongoURI");

//Connect to Mongo
mongoose.connect(db, {
    'useNewUrlParser': true, 
    'useUnifiedTopology': true, 
    'useFindAndModify': true,
    'useCreateIndex': true
})
.then(() => console.log("MongoDB connected."))
.catch(err => console.log(err));

//Use Routes
app.use("/api/auth", auth);
app.use("/api/lists", lists);
app.use("/api/saved", saved);
app.use("/api/favorites", favorites);

//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.use('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server connected on port ${port}`));