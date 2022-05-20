const Movie = require("../Models/movie");
const Review = require("../Models/review");

exports.getIndex = (req, res) => {
    res.render("index");
}

exports.getRedirect = (req, res) => {
    res.redirect('/api/v1/movies');
}

exports.getMovies = (req, res) => {
    res.render("movies");
}

exports.getMovieID = (req, res) => {
    const searchById = {
        _id: req.params.id
    };
    Movie.findById(searchById)
        .then(result => {
            res.json(result);
        });
};

exports.getAPIMovies = (req, res) => {
    console.log("-")
    Movie.find({})
    
    .then(result => {
        console.log(result)
        res.json(result);
    })
};

exports.getRates = (req, res) => {
    res.json("getRates non defini encore");
    //avec le then et le catch, et on fait pas du render mais du json si on fait apparaitre du data.
    //on va faire apparaitre le data de tous les rates ici.
    //on va utiliser le params
    //il manque pleins de trucs ici lol
};

exports.moviesPerPage = (req, res) => {
    res.json("moviesPerPage non defini encore");
    //avec le then et le catch, et on fait pas du render mais du json si on fait apparaitre du data.
    //on va faire apparaitre le data du nombres de films par page ici. Defaut = 20
    //on va utiliser le params ??
    //il manque pleins de trucs ici lol
};

exports.getTitles = (req, res) => {
        res.json("getTitles non defini encore");
};



exports.getPages = (req, res) => {
    res.json("getPages non defini encore");
    //avec le then et le catch, et on fait pas du render mais du json si on fait apparaitre du data.
    //on va faire apparaitre le data du nombres de pages
    //on va utiliser le params ??
    //il manque pleins de trucs ici lol
};

exports.getRatings = (req, res) => {
    res.json("getPages non defini encore");
    //avec le then et le catch, et on fait pas du render mais du json si on fait apparaitre du data.
    //on va faire apparaitre le data de tous les ratings dispo
    //on va utiliser le params ??
    //il manque pleins de trucs ici lol
};