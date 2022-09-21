//DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const pokemonTeam = require("./controllers/pokemonTeam_controller");
//const pokedex = require("pokedex-promise-v2");

const app = express();

//MIDDLEWARE
app.use(express.json({ limit: "10mb" }));
app.use(cors());

//ROUTES
app.use("/team", pokemonTeam);
app.use("/storedPokemon", require("./controllers/storedPokemon"));
app.use("/pokemon", require("./controllers/pokemon_controller"));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

app.listen(process.env.PORT || 5050);
