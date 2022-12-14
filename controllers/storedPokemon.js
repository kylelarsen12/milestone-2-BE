//Dependencies
const router = require("express").Router();
const axios = require("axios");
const storedPokemon = require("../models/storedPokemon.js");
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
  try {
    const { allPokemon } = await storedPokemon.find({});
    res.json(allPokemon);
  } catch (error) {
    res.status(500).json({ message: String(error) });
  }
});

router.get("/:id", async (req, res) => {
    try {
        const targetPokemon = await storedPokemon.findById(req.params.id);
        res.json(targetPokemon);
        console.log(targetPokemon.name);
    } catch (error) {
        res.status(500).json({ message: String(error) });
    }
});

router.post("/", async (req, res) => {
    try {
        const { data } = await axios.get(
            "https://pokeapi.co/api/v2/pokemon/pikachu"
        );
        const createdPokemon = await new storedPokemon(data).save();
        console.log(createdPokemon);
        res.json({ message: "pokemon added to storedpokemon db" });
    } catch (error) {
        res.status(500).json({ message: String(error) });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await storedPokemon.findOneAndDelete(id);
        res.send("Success").status(303);
        //res.redirect("/") NOTE: For some reason the response to the request when this line was put there
        //was Cannot GET / showing up in postman. Cant figure out for the life of me why, may need a res.render(filename)
        //to get the server to go somewhere if needed

        // res.json(user); this gave an error regarding the headers as well
    } catch (error) {
        res.status(500);
        // res.send(error); same as line 65 here
    }
});

//Export
module.exports = router;
