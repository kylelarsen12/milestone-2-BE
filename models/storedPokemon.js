//Dependencies
const mongoose = require("mongoose");
const { Schema } = mongoose;

//Schema
const storedPokemonSchema = new mongoose.Schema(
  {
    name: { type: String },
    types: { type: Array },
    id: { type: Number },
    sprites: { type: Object },
    isCaptured: { type: Boolean, default: false },
    onTeam: { type: Boolean, default: false },
    isStored: { type: Boolean, default: false },
    team: { type: mongoose.Schema.ObjectId, ref: "Team" },
  },
  { toJSON: { virtuals: true } }
);

//Helper method
storedPokemonSchema.methods.logStorage = function () {
  return `${this.data.name} was stored into the PC`;
};

//Export
const storedPokemon = mongoose.model("storedPokemon", storedPokemonSchema);
module.exports = storedPokemon;
