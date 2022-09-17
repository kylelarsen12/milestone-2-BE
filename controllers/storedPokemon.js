//Dependencies
const router = require("express").Router();
const axios = require("axios");
const storedPokemon = require("../models/storedPokemon");
//const pokedex = require("pokedex-promise-v2");

//Routes
router.get("/", async (req, res) => {
  const resData = await axios
    .get("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((dataToPrint) => console.log(dataToPrint.data))
    .catch((err) => console.log(err));
});

router.get("/:id", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

router.post("/", async (req, res) => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log(data);
    const createdPokemon = await new storedPokemon(data).save();
    console.log(createdPokemon);
    res.json({ message: "pokemon added to storedpokemon db" });
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params.id;
    const targetPokemon = await storedPokemon.findOneAndDelete({ _id: id });
    res.json(targetPokemon);
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

//Export
module.exports = router;
