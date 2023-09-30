const { v4: uuidv4 } = require('uuid');

const movies = [
    {
        id: uuidv4(),
        title: 'Gladiator',
        relise_year: 2000,
        studio: 'Scott Free Productions',
        genre: 'Western'
    },
      {
        id: uuidv4(),
        title: 'Indian Jones',
        relise_year: 1981,
        studio: 'Paramount Pictures',
        genre: 'Romance'
    },
     {
        id: uuidv4(),
        title: 'Aliens',
        relise_year: 1986,
        studio: '20th Century Studio',
        genre: 'Fantasy'
    },
      {
        id: uuidv4(),
        title: 'Pirates of Caribbean',
        relise_year: 2003,
        studio: 'Walt Disney Pictures',
        genre: 'Fantasy'
    },
];

module.exports.getMovies = (req, res) => {
    res.status(200).send(movies)
}

module.exports.getMovieById = (req, res) => {
    const { movieId } = req.params
    const [movie] = movies.filter(movie => movie.id === movieId);
    if (movie) {
        res.status(200).send(movie)
    } else {
        res.status(404).send('Movie is not found')
    }
};