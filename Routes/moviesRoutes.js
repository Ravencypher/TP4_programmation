const express = require("express");
const router = express.Router();
const homeController = require("../Controllers/homeComtroller");

//------------------------------------------------------------------------------------------------------------------//
// NOTES DU TP //
// Attention: tous les toutes les routes commencent par /api/vi1/movies.
// En outre, pour retourner les données sous format.json
// il faut utiliser la fonction.json(response) a la place de.render(resultat)
// Par exemple, response.json(resulat).
//------------------------------------------------------------------------------------------------------------------//
//NOTES//
//c. /id/ :id qui permet de retourner un movie spécifique selon son id.

// title=value qui permet de retourner les movies ayant la valeur value dans son titre.
// Dans tous le cas la recherche commence par title. Si cette paramètre n’existe pas on cherche par rates.

//Page /Movies
// Lorsque l’utilisateur saisi par exemple le titre d’un movie, il aura les résultats.
// Ensuite, il peut cliquer sur Get next 20, pour recevoir les 20 prochaines movies, etc.

//b. /rating qui permet de retourner les ratings des movies.

//------------------------------------------------------------------------------------------------------------------//
//MOVIE ROUTES OK//

// va faire une redirection de /api/v1/movies sur le slash
router.get("/api/v1/movies", homeController.getAPIMovies);
router.get("/", homeController.getRedirect);

// va sur une pseudo page d'accueil
router.get("/index", homeController.getIndex);

// va direct sur une page de recherche de films
router.get("/movies", homeController.getMovies);

//Get a specific movie ID
router.get("/api/v1/movies/id/:id", homeController.getMovieID);

//Get movie title(s)
router.get("/api/v1/movies/titles/:title", homeController.getTitle);

//Get movie rating(s)
router.get("/api/v1/movies/rated/:rated", homeController.getRated);

// Get all the ratings available
router.get("/api/v1/movies/rating", homeController.getRating);

//------------------------------------------------------------------------------------------------------------------//
//MOVIE ROUTES A FAIRE//

// moviesPerPage=nombreMovies qui permet de retourner seulement nombreMovies movies.
// Si cette nombreMovies n’est pas fournie seulement 20 movies seront retourner. (j'ai mis 20)
router.get("/api/v1/movies/:moviesPerPage=20", homeController.moviesPerPage);

// pages=nombrePage qui permet de retourner le nombreMovies du nombrePage page. La valeur par defaut est 0.
// Aide : utilisez la methode .limit(MoviesPerPage).skip(MoviesPerPage*pages) pour retourner le nombreMovies du nombrePage page.
router.get("/api/v1/movies/:pages=nombrePage", homeController.getPages);

//------------------------------------------------------------------------------------------------------------------//

module.exports = router;