const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    text: String,
    name: String,
    user_id: mongoose.Schema.Types.ObjectId,
    movie_id: mongoose.Schema.Types.ObjectId,
    date: Date
});

module.exports = mongoose.model("Comment", CommentSchema);