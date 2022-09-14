//Dependencies
const router = require("express").Router();
const axios = require("axios");
const db = require("../models/storedPokemon");
//const pokedex = require("pokedex-promise-v2");

//Routes
router.get("/", async (req, res) => {
  await axios
    .get("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((dataToPrint) => console.log(dataToPrint.data.sprites))
    .catch((err) => console.log(err));
});

//Export
module.exports = router;
