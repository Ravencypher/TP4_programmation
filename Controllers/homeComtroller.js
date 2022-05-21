const Movie = require("../Models/movies");
const Comment = require("../Models/comments");

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
            console.log("Search query for the title is : " + req.params.title)
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
            }
        })
        .then(result => {
            console.log("Search query for the rating is : " + req.params.rated)
            res.json(result);
        });
};

//------------------------------------------------------------------------------------------------------------------//
//HARDCODED FOR NOW : getRating sends all the ratings available.
exports.getRating = (req, res) => {
    let moviesRating = {
        movies: ["AO", "APPROVED", "Approved", "G", "GP", "M", "NC-17", "NOT RATED", "Not Rated", "OPEN", "PASSED", "PG", "PG-13", "R", "TV-14", "TV-G", "TV-MA", "TV-PG", "TV-Y7", "UNRATED", "X"]
    };
    res.json(moviesRating);
};

//------------------------------------------------------------------------------------------------------------------//

exports.moviesPerPage = (req, res) => {
    res.json("moviesPerPage non defini encore");
};

exports.getPages = (req, res) => {
    res.json("getPages non defini encore");
};