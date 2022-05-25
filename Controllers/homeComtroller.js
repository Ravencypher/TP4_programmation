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
// Find an exact title or find all titles if keyword is generic (exemple : man gets many results, while Queen%20Kelly gets one specific result).
// ATTN: change the space by %20 for testing directly in the browser if title is specific.

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
//Find all the data available in the API (Over 24,000 results)

// Point 3 de la section 2 du PDF :
// Par ma compréhension du PDF, c'est un .limit.
// Si le user ne donne pas un nombre de films, alors le .limit sera de 20. Si le user spécifie, par exemple 5 films, alors le .limit sera de 5.

// Point 4 de la section 2 du PDF :
// .limit et .skip permettent ici de limiter à 20 films à la page '0' (c'est-à-dire, au film #1 et suivant...)
// Si nous voulons 'skipper' vers les 20 suivants, alors nous devons mettre .skip a 20. (et donc avoir le film #21 et suivant...)

const limit = 20;
const skip = 20;

exports.getAPIMovies = (req, res) => {
    Movie.find({
            data: req.data
        })
        .limit(limit).skip(skip)
        .then(result => {
            console.log("data is loading... Please be patient !")
            res.json(result);
        });
};

//------------------------------------------------------------------------------------------------------------------//
// Find all ratings (keyword 'rated' in the API)

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
// getRating sends all the ratings available.

const moviesRating = {
    movies: ["AO", "APPROVED", "Approved", "G", "GP", "M", "NC-17", "NOT RATED", "Not Rated", "OPEN", "PASSED", "PG", "PG-13", "R", "TV-14", "TV-G", "TV-MA", "TV-PG", "TV-Y7", "UNRATED", "X"]
};

exports.getRating = (req, res) => {
    moviesRating;
    res.json(moviesRating);
};

//------------------------------------------------------------------------------------------------------------------//

// exports.moviesPerPage = (req, res) => {
//     res.json("moviesPerPage non defini encore");
// };

// exports.getPages = (req, res) => {
//     res.json("getPages non defini encore");
// };