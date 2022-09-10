const express = require("express");
const mongoose = require("mongoose");
const pokemonTeam = require("./controllers/pokemonTeam_controller");
require("dotenv").config();

const app = express;

app.use(express.json());

app.use("/team", pokemonTeam);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("listening on port" + PORT);
});
