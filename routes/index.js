const express = require('express');
const router  = express.Router();
const Movies = require("../models/Movies")

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

router.get('/movies', (req, res, next) => {
  Movies
    .find({})
    .select({
      title: 1,
      _id: 1
    })
    .then(allMovies => {
      allMovies = allMovies.map(movie => {
        movie.name = movie.title
        movie.id = movie._id
        delete movie.title
        movie.price = randomInt(20, 40)
        return movie
      })

      res.json(allMovies)
    })
});

module.exports = router;
