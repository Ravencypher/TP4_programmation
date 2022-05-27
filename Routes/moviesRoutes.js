const express = require("express");
const router = express.Router();
const homeController = require("../Controllers/homeComtroller");

router.get("/api/v1/movies", homeController.getAPIMovies);
router.get("/", homeController.getRedirect);

// Get a specific movie by ID
router.get("/api/v1/movies/id/:id", homeController.getMovieID);

// Get movie title(s) along with a particular rating.
router.get("/api/v1/movies/sortwithfilter=:title/:rated", homeController.getTitleThenRates);

// Get movie title(s), if the title doesn't exit, then it will search by rating.
router.get("/api/v1/movies/sort=:title", homeController.getTitleOrRates);

// Get movie title(s) only
router.get("/api/v1/movies/titles=:title", homeController.getTitle);

// Get movie rating(s) only
router.get("/api/v1/movies/rated=:rated", homeController.getRated);

// Get all the ratings available
router.get("/api/v1/movies/rating", homeController.getRating);

module.exports = router;