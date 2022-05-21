const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    title: String,
    rated: String,
}, {
    timestamps: true
});

module.exports = mongoose.model("Movie", movieSchema);