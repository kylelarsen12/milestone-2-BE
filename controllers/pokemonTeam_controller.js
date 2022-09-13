const express = require("express");
const router = express.Router();
const Team = require("../models/team");
const randomId = Math.floor(Math.random() * 150) + 1;

async function newPokemon(randomId) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
}

router.get("/", async (req, res) => {
    try {
        newPokemon(randomId).then((foundPokemon) => {
            foundPokemon = newPokemon.json();
            res.status(200).json(foundPokemon);
        });
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});

router.get("/:id", async (req, res) => {
    const pokemon = await Team.findById(req.params.id).then((foundPokemon) => {
        res.send(foundPokemon.json());
    });
});

router.post("/", (req, res) => {
    Team.create(newPokemon());
});

router.delete("/:id", (req, res) => {
    Team.findByIdAndDelete(req.params.id).then((deletedPokemon) => {
        res.status(303);
    });
});

module.exports = router;
