//DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI, {
  useNewURLParser: true,
  useUnifiedTopology: true,
});
//const pokedex = require("pokedex-promise-v2");

const app = express();

//MIDDLEWARE
app.use(express.json());

//ROUTES
app.use("/storedPokemon", require("./controllers/storedPokemon"));

app.listen(process.env.PORT || 5000);
