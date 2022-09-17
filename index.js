//DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
//const pokedex = require("pokedex-promise-v2");

const app = express();

//MIDDLEWARE
app.use(express.json());

//ROUTES
app.use("/storedPokemon", require("./controllers/storedPokemon"));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

app.listen(process.env.PORT || 5050);
