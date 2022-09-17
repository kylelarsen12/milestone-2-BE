const express = require("express");
const router = express.Router();
const Team = require("../models/team");
const randomId = Math.floor(Math.random() * 150) + 1;
const axios = require("axios");
const { default: mongoose } = require("mongoose");
// const db = require(`../models/team.js`);

router.get("/", async (req, res) => {
    try {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then((foundPokemon) => {
                res.status(200);
                res.send(foundPokemon.data.name);
            });
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`)
            .then((foundPokemon) => {
                res.status(200);
                res.send(foundPokemon.data);
            });
    } catch (error) {
        res.status(500).json();
        console.log(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const { pokemon, name } = req.body;
        console.log(name);
        const createdTeam = await new Team({
            pokemon,
            name,
        });
        await createdTeam.save();
        res.send(createdTeam);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});

router.delete("/:id", (req, res) => {
    Team.findByIdAndDelete(req.params.id).then((deletedPokemon) => {
        res.status(303);
    });
});

module.exports = router;
