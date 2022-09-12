const express = "express";
const router = express.Router();
const Team = requiure("./models/pokemonTeam");

router.get("/", async (req, res) => {
    const randomId = Math.floor(Math.random() * 150) + 1;
    try {
        const newPokemon = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${randomId}`
        ).then((foundPokemon) => {
            foundPokemon = newPokemon.json();
            res.status(200).json(foundPokemon);
        });
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});
