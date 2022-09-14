//Dependencies
const mongoose = require("mongoose");

//Schema
const storedPokemonSchema = new mongoose.Schema(
  {
    name: { type: String },
    type: { type: String },
    id: { type: Number },
  },
  { toJSON: { virtuals: true } }
);

//Helper method
storedPokemonSchema.methods.logStorage = function () {
  return `${this.data.name} was stored into the PC`;
};

//Export
module.exports = mongoose.model("storedPokemon", storedPokemonSchema);
