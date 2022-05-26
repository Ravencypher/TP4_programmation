const Movie = require("../Models/movies");
const Comment = require("../Models/comments");

// .limit et .skip permettent ici de limiter à 20 films à la page '0' (c'est-à-dire, au film #1 et suivant...)
// Si nous voulons 'skipper' vers les 20 suivants, alors nous devons mettre .skip à 20. (et donc avoir le film #21 et suivant...)
let limit = 20;
let skip = 0;

const moviesRating = {
    movies: ["AO", "APPROVED", "Approved", "G", "GP", "M", "NC-17", "NOT RATED", "Not Rated", "OPEN", "PASSED", "PG", "PG-13", "R", "TV-14", "TV-G", "TV-MA", "TV-PG", "TV-Y7", "UNRATED", "X"]
};

exports.getRedirect = (req, res) => {
    res.redirect('/api/v1/movies');
}

//------------------------------------------------------------------------------------------------------------------//
//Find exact movie id

exports.getMovieID = (req, res) => {
    const searchById = {_id: req.params.id};
    Movie.findById(searchById)
        .then(result => {
            console.log(`Search query for the movie ID is : ${req.params.id}`)
            res.json(result);
        })
        .catch(error => {
            console.log(`API isn't available. There was an error. Error is message is : ${error.message}`)
        })
};

//------------------------------------------------------------------------------------------------------------------//
// Find an exact title or find all titles if keyword is generic (example : man gets many results, while Queen%20Kelly gets one specific result).

exports.getTitle = (req, res) => {
    Movie.find({title: {$regex: req.params.title}})
        .then(result => {
            console.log(`Search query for the title is : ${req.params.title}`)
            res.json(result);
        })
        .catch(error => {
            console.log(`API isn't available. There was an error. Error is message is : ${error.message}`)
        });
};

//------------------------------------------------------------------------------------------------------------------//
// Compare the amount of objects in the title result. If length is 0, then it searches by rated instead.

exports.getTitleOrRates = (req, res) => {
    Movie.find({title: {$regex: req.params.title}}).limit(limit).skip(skip)
        .then(result => {
            if (result.length !== 0) {
                console.log(`Search query for the title is : ${req.params.title}`)
                console.log(`Amount of results is : ${result.length}`)
                res.json(result)
            } else {
                Movie.find({rated: req.params.title}).limit(limit)
                    .then(result => {
                        console.log(`No results for the title you're looking for (${req.params.title}). Going into rated instead.`)
                        console.log(`Results are for the search by rated : ${req.params.title}`)
                        res.json(result)
                    })
            }
        })
        .catch(error => {
            console.log(`API isn't available. There was an error. Error is message is : ${error.message}`)
        });
}

//------------------------------------------------------------------------------------------------------------------//
// Search for a movie title, with a keyword, and add a rating.

exports.getTitleThenRates = (req, res) => {
    Movie.find({
            "title": {$regex: req.params.title},
            "rated": req.params.rated
            }).limit(limit).skip(skip)

        .then(result => {
            console.log(`Search query for the title is : ${req.params.title} with a rating of ${req.params.rated}`)
            res.json(result)
        })
        .catch(error => {
            console.log(`API isn't available. There was an error. Error is message is : ${error.message}`)
        });
}

//------------------------------------------------------------------------------------------------------------------//
// Find all the data available in the API (23,000 + results)

exports.getAPIMovies = (req, res) => {
    Movie.find({data: req.data})
        .then(result => {
            console.log(`Data is loading... Please be patient ! Currently ${result.length} Results loaded.`)
            res.json(result);
        })
        .catch(error => {
            console.log(`API isn't available. There was an error. Error is message is : ${error.message}`)
        })
};

//------------------------------------------------------------------------------------------------------------------//
// Find all ratings (keyword 'rated' in the API)

exports.getRated = (req, res) => {
    Movie.find({rated: {$regex: req.params.rated}}).limit(limit).skip(skip)
        .then(result => {
            console.log(`Search query for the rating is : ${req.params.rated}`)
            res.json(result);
        })
        .catch(error => {
            console.log(`API isn't available. There was an error. Error is message is : ${error.message}`)
        })
};

//------------------------------------------------------------------------------------------------------------------//
// getRating sends all the ratings available.

exports.getRating = (req, res) => {
    moviesRating;
    res.json(moviesRating);
};