//Dependencies
const router = require("express").Router();
const axios = require("axios");
const StoredPokemon = require("../models/storedPokemon");
//const pokedex = require("pokedex-promise-v2");

//Routes
router.get("/", async (req, res) => {
  const resData = await axios
    .get("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((dataToPrint) => console.log(dataToPrint.data))
    .catch((err) => console.log(err));
  StoredPokemon.create(resData);
});

router.post("/", async (req, res) => {
  const resData = await axios
    .get("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(console.log("blah"))
    .catch((err) => console.log(err));
  StoredPokemon.create(resData.name);
});

//Export
module.exports = router;
