const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    review: String,
    name: String,
    user_id:ObjectId,
    movie_id:ObjectId,
    date:date
});

module.exports = mongoose.model("Review", reviewSchema);