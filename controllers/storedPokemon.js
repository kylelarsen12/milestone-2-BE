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
});

router.post("/", async (req, res) => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log(data);
    const createdPokemon = await new StoredPokemon(data).save();
    console.log(createdPokemon);
    res.json({ message: "pokemon added to storedpokemon db" });
  } catch (error) {
    res.status(400).json({ message: String(error) });
  }
});

router.delete("/", async (req, res) => {});

//Export
module.exports = router;
