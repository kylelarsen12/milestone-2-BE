//Dependencies
const mongoose = require("mongoose");
const { Schema } = mongoose;

//Schema
const pokemonSchema = new mongoose.Schema(
  {
    name: { type: String },
    types: { type: Array },
    id: { type: Number },
    sprites: { type: Object },
    isCaptured: { type: Boolean, default: false },
    onTeam: { type: Boolean, default: false },
    isStored: { type: Boolean, default: false },
  },
  { toJSON: { virtuals: true } }
);

//Helper method
pokemonSchema.methods.logStorage = function () {
  return `${this.data.name} was stored into the PC`;
};

//Export
const Pokemon = mongoose.model("Pokemon", pokemonSchema);
module.exports = Pokemon;
