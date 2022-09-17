const express = require("express");
const mongoose = require("mongoose");
const pokemonTeam = require("./controllers/pokemonTeam_controller");
require("dotenv").config();

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log("listening on port " + process.env.PORT);
});
// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("hello there");
});

app.use("/team", pokemonTeam);

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connected to " + process.env.MONGO_URI);
    })
    .catch((error) => {
        console.log(error);
    });
