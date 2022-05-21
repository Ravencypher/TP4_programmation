const Movie = require("../Models/movie");
const Review = require("../Models/review");

//------------------------------------------------------------------------------------------------------------------//
//Regular routes
exports.getIndex = (req, res) => {
    res.render("index");
}

exports.getRedirect = (req, res) => {
    res.redirect('/api/v1/movies');
}

exports.getMovies = (req, res) => {
    res.render("movies");
}

//------------------------------------------------------------------------------------------------------------------//
//Find exact movie id
exports.getMovieID = (req, res) => {
    const searchById = {
        _id: req.params.id
    };
    Movie.findById(searchById)
        .then(result => {
            res.json(result);
        });
};

//------------------------------------------------------------------------------------------------------------------//
//Find exact title
//Find all titles as well if keyword is generic.
//change the space by %20 for testing directly in the browser if title is specific.
exports.getTitle = (req, res) => {
    Movie.find({
            title: {
                $regex: req.params.title
            }
        })
        .then(result => {
            console.log("Title is : " + req.params.title)
            res.json(result);
        });
};

//------------------------------------------------------------------------------------------------------------------//
//Find all the data available in the API
exports.getAPIMovies = (req, res) => {
    Movie.find({
            data: req.data
        })
        .then(result => {
            console.log("data is loading... Please be patient !")
            res.json(result);
        });
};

//------------------------------------------------------------------------------------------------------------------//
//Find all ratings (keyword 'rated' in the API)
exports.getRated = (req, res) => {
    Movie.find({
        rated: {
            $regex: req.params.rated
        }    })
    .then(result => {
        console.log("Rated is : " + req.params.rated)
        res.json(result);
    });};

//------------------------------------------------------------------------------------------------------------------//

exports.getRatings = (req, res) => {
    res.json("getRates non defini encore");
};

exports.moviesPerPage = (req, res) => {
    res.json("moviesPerPage non defini encore");
};

exports.getPages = (req, res) => {
    res.json("getPages non defini encore");
};