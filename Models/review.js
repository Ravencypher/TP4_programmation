const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    review: String,
    name: String,
    user_id: mongoose.Schema.Types.ObjectId,
    movie_id: mongoose.Schema.Types.ObjectId,
    date: Date
});

module.exports = mongoose.model("Review", reviewSchema);