const express = require("express");
const router = express.Router();
const homeController = require("../Controllers/homeComtroller");

//------------------------------------------------------------------------------------------------------------------//
//MOVIE ROUTES OK//

// Va faire une redirection de /api/v1/movies sur le slash
router.get("/api/v1/movies", homeController.getAPIMovies);
router.get("/", homeController.getRedirect);

// va sur une pseudo page d'accueil
router.get("/index", homeController.getIndex);

// Va direct sur une page de recherche de films
router.get("/movies", homeController.getMovies);

// Get a specific movie ID
router.get("/api/v1/movies/id/:id", homeController.getMovieID);

// Get movie title(s)
router.get("/api/v1/movies/titles/:title", homeController.getTitle);

// Get movie rating(s)
router.get("/api/v1/movies/rated/:rated", homeController.getRated);

// Get all the ratings available
router.get("/api/v1/movies/rating", homeController.getRating);

//------------------------------------------------------------------------------------------------------------------//
//MOVIE ROUTES A FAIRE//

// moviesPerPage=nombreMovies qui permet de retourner seulement nombreMovies movies.
// Si cette nombreMovies n’est pas fournie seulement 20 movies seront retourner. (j'ai mis 20)
// router.get("/api/v1/movies/titles/:title?limit=20", homeController.moviesPerPage);

// pages=nombrePage qui permet de retourner le nombreMovies du nombrePage page. La valeur par defaut est 0.
// Aide : utilisez la methode .limit(MoviesPerPage).skip(MoviesPerPage*pages) pour retourner le nombreMovies du nombrePage page.
// router.get("/api/v1/movies/:pages=nombrePage", homeController.getPages);

//------------------------------------------------------------------------------------------------------------------//

module.exports = router;