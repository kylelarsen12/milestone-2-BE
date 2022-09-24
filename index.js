//DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/team", require("./controllers/pokemonTeam_controller"));
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
