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
//MOVIE ROUTES//

router.get("/api/v1/movies", homeController.getAPIMovies);

//va faire une redirection de /api/v1/movies sur le slash
router.get("/", homeController.redirectIndex);

//va faire une redirection de /api/v1/movies sur l'index
router.get("/index", homeController.redirectIndex);

// title=value qui permet de retourner les movies ayant la valeur value dans son titre.
// Dans tous le cas la recherche commence par title. Si cette paramètre n’existe pas on cherche par rates.
router.get("/api/v1/movies/:title", homeController.getTitles);

// rates=value qui permet de retrouner les movies ayant les value comme rating.
router.get("/api/v1/movies/:rates", homeController.getRates);

// moviesPerPage=nombreMovies qui permet de retourner seulement nombreMovies movies.
// Si cette nombreMovies n’est pas fournie seulement 20 movies seront retourner. (j'ai mis 20)
router.get("/api/v1/movies/:moviesPerPage=20", homeController.moviesPerPage);

// pages=nombrePage qui permet de retourner le nombreMovies du nombrePage page. La valeur par defaut est 0.
// Aide : utilisez la methode .limit(MoviesPerPage).skip(MoviesPerPage*pages) pour retourner le nombreMovies du nombrePage page.
router.get("/api/v1/movies/:pages=nombrePage", homeController.getPages);

//Lorsque l’utilisateur saisi par exemple le titre d’un movie, il aura les résultats.
//Ensuite, il peut cliquer sur Get next 20, pour recevoir les 20 prochaines movies, etc.
router.get("/movies", homeController.getMovies);

//b. /rating qui permet de retourner les ratings des movies.
router.get("/api/v1/movies/ratings", homeController.getRatings);

//c. /id/ :id qui permet de retourner un movie spécifique selon son id.
router.get("/api/v1/movies/id/:id", homeController.getMovieID);

module.exports = router;