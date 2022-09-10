const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamSchema = new Schema(
    {
        pokemon: {
            type: Array,
        },
    },
    { toJSON: { virtuals: true } }
);

teamSchema.post("findOneAndDelete", () => {});

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
