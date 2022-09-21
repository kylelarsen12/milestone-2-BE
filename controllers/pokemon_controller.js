//Dependencies
const router = require("express").Router();
const axios = require("axios");
const cors = require("cors");
const Pokemon = require("../models/pokemon.js");
const storedPokemon = require("../models/storedPokemon");
let newPokemon;
//const pokedex = require("pokedex-promise-v2");

//Routes

/*
router.get("/", async (req, res) => {
  try {
    const resData = await axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((pokemonData) => {
        console.log(pokemonData.data);
        res.json(pokemonData.data);
      });
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});
*/

router.get("/", async (req, res) => {
  const randomId = Math.floor(Math.random() * 150) + 1;
  try {
    const randomPokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    await new Pokemon(randomPokemon.data).save();
    newPokemon = randomPokemon.data;
    res.send(randomPokemon.data).json();
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

router.get("/myPokemon", async (req, res) => {
  try {
    const allPokemon = await storedPokemon.find({ isCaptured: true });
    res.json(allPokemon);
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const targetPokemon = await Pokemon.findById(req.params.id);
    res.json(targetPokemon);
    console.log(targetPokemon.name);
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

router.post("/storedPokemon", async (req, res) => {
  try {
    const createdPokemon = await storedPokemon.create(newPokemon);
    await storedPokemon.findByIdAndUpdate(createdPokemon._id, {
      isCaptured: true,
      isStored: true,
    });
    res.json({ message: "pokemon added to storedpokemon db" });
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

router.delete("/storedPokemon/:id", async (req, res) => {
  try {
    const { id } = req.params.id;
    const user = await storedPokemon.findOneAndDelete({ _id: id });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

//Export
module.exports = router;
