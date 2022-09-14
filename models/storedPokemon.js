//Dependencies
const mongoose = require("mongoose");

//Schema
const storedPokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pokeType: { type: String, required: true },
});
