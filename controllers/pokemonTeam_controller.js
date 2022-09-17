const express = require("express");
const router = express.Router();
const Team = require("../models/team");
const randomId = Math.floor(Math.random() * 150) + 1;
const axios = require("axios");
const mongoose = require("mongoose");

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
        Team.findById(req.params.id).then((foundTeam) => {
            res.send(foundTeam);
        });
    } catch (error) {
        res.status(500).json();
        console.log(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const name = req.body.name;
        const pokemon = req.body.pokemon;
        console.log(name);
        const createdTeam = await new Team({
            pokemon,
            name,
        }).save();
        // Team.create(createdTeam);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});

router.put("/:id", (req, res) => {
    Team.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
        (updatedTeam) => {
            res.send(updatedTeam);
        }
    );
});

router.delete("/:id", (req, res) => {
    Team.findByIdAndDelete(req.params.id).then((deletedPokemon) => {
        res.status(303);
    });
});

module.exports = router;
