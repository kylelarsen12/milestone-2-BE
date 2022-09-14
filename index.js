//DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
require("dotenv").config();
//const pokedex = require("pokedex-promise-v2");

const app = express();

//MIDDLEWARE
app.use(express.json());

//ROUTES
app.use("/storedPokemon", require("./controllers/storedPokemon"));

//DB CONNECTION

app.listen(process.env.PORT || 5000);
