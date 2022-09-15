const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamSchema = new Schema(
    {
        pokemon: {
            type: Array,
        },
        name: {
            type: String,
        },
    },
    { toJSON: { virtuals: true } }
);

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
