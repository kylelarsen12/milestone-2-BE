//DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//MIDDLEWARE
app.use(express.json());

//ROUTES

//DB CONNECTION
