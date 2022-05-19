
// dans le homeController : response.json(resulat) au lieu des render

const Movie = require("../Models/movie");
const Review = require("../Models/review");

//------------------------------------------------------------------------------------------------------------------//
//FONCTIONS A CREER//

// router.get("/api/v1/movies", homeController.getAPIMovies);
// router.get("/", homeController.redirectIndex);
// router.get("/index", homeController.redirectIndex);
// router.get("/api/v1/movies/:title", homeController.getTitles);
// router.get("/api/v1/movies/:rates", homeController.getRates);
// router.get("/api/v1/movies/:moviesPerPage=20", homeController.moviesPerPage);
// router.get("/api/v1/movies/:pages=nombrePage", homeController.getPages);
// router.get("/movies", homeController.getMovies);
// router.get("/api/v1/movies/ratings", homeController.getRatings);
// router.get("/api/v1/movies/id/:id", homeController.getMovieID);

//------------------------------------------------------------------------------------------------------------------//

exports.getMovies = (req, res) => {
    res.render("movies");
}

exports.redirectIndex = (req, res) => {
    res.redirect("/");
}

exports.getAPIMovies = ("/movies", (req, res) => {
    response.json(resulat);
    //avec le then et le catch, et on fait pas du render mais du json si on fait apparaitre du data.
    //on va faire apparaitre le data de tous les films ici.
    //il manque pleins de trucs ici lol
});

exports.getTitles = (req, res) => {
    response.json(resulat);
    //avec le then et le catch, et on fait pas du render mais du json si on fait apparaitre du data.
    //on va faire apparaitre le data de tous les titres ici.
    //on va utiliser le params
    //il manque pleins de trucs ici lol
};

exports.getRates = (req, res) => {
    response.json(resulat);
    //avec le then et le catch, et on fait pas du render mais du json si on fait apparaitre du data.
    //on va faire apparaitre le data de tous les rates ici.
    //on va utiliser le params
    //il manque pleins de trucs ici lol
};

exports.moviesPerPage = (req, res) => {
    response.json(resulat);
    //avec le then et le catch, et on fait pas du render mais du json si on fait apparaitre du data.
    //on va faire apparaitre le data du nombres de films par page ici. Defaut = 20
    //on va utiliser le params ??
    //il manque pleins de trucs ici lol
};

exports.getPages = (req, res) => {
    response.json(resulat);
    //avec le then et le catch, et on fait pas du render mais du json si on fait apparaitre du data.
    //on va faire apparaitre le data du nombres de pages
    //on va utiliser le params ??
    //il manque pleins de trucs ici lol
};

exports.getRatings = (req, res) => {
    response.json(resulat);
    //avec le then et le catch, et on fait pas du render mais du json si on fait apparaitre du data.
    //on va faire apparaitre le data de tous les ratings dispo
    //on va utiliser le params ??
    //il manque pleins de trucs ici lol
};

exports.getMovieID = (req, res) => {
    response.json(resulat);
    //avec le then et le catch, et on fait pas du render mais du json si on fait apparaitre du data.
    //on va faire apparaitre le data avec l'aide d'un ID de film en particulier
    //on va utiliser le params
    //il manque pleins de trucs ici lol
};