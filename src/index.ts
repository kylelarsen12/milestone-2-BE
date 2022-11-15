//DEPENDENCIES

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const pokemonTeam = require("./controllers/pokemonTeam_controller");
//const pokedex = require("pokedex-promise-v2");

const app = express();
const mongo_uri = process.env.MONGO_URI;

//MIDDLEWARE
app.use(express.json());

//ROUTES
app.use("/team", pokemonTeam);
app.use("/storedPokemon", require("./controllers/storedPokemon"));

mongoose.connect(
    "mongodb+srv://pokemon-milestone-db:Jb5cIeigcKlsXUAq@cluster0.xptpx47.mongodb.net/pokemon-milestone?retryWrites=true&w=majority"
);
//.then(() => console.log("DB connected"))
//.catch((err) => console.error(err));

app.listen(process.env.PORT || 5050, () => {
    console.log("connected to port");
});
