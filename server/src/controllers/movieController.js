const db = require('../db')

class MovieController{
    async getMovies(req, res) {
        try {
            const movies = await db.query(
                `SELECT title, relise_year, movie_id
                FROM movies
                ORDER BY movie_id
                `
            );
            console.log(movies.rows)
            res.json(movies.rows)
        } catch (error) {
            console.log(error)
        }
    }

    async getMovieById(req, res){ 
        try {
            const { movieId } = req.params;
            const movie = await db.query(  
                `SELECT
            movies.movie_id,
            movies.title,
            movies.relise_year,
            movies.poster,
            studios.title AS studio,
            genres.title AS genre
            FROM movies
            JOIN studios 
            USING(studio_id)
            JOIN genres 
            USING(genre_id)
            WHERE movies.movie_id=$1
            `,
                [movieId]
            );
            console.log(movie.rows[0]);
            res.json(movie.rows[0])
        } catch (error) {
            console.log(error)
        }
    }

    async createMovie(req, res) {
        try {
            const {
                title,
                relise_year,
                genre,
                studio,
                poster} = req.body;
            const newMovie = await db.query(
                `INSERT INTO movies
                (title,
                relise_year,
                genre_id,
                studio_id,
                poster)
                VALUES($1, $2, (
                    SELECT genre_id 
                    FROM genres
                    WHERE title=$3), (
                    SELECT studio_id 
                    FROM studios
                    WHERE title=$4), $5)
                RETURNING *
                `, [title, relise_year, genre, studio, poster]
            );
            res.json(newMovie.rows[0])
        } catch (error) {
            console.log(error)
        }
    }
    async updateMovie(req, res) {
        try {
            const {
                title,
                relise_year,
                genre,
                studio,
                poster,
                movie_id
            } = req.body;
            const updatedMovie = await db.query(
                `UPDATE movies
                    SET 
                    title=$1,
                    relise_year=$2,
                    genre_id=(
                        SELECT genre_id 
                        FROM genres
                        WHERE title=$3
                    ),
                    studio_id=(
                        SELECT studio_id 
                        FROM studios
                        WHERE title=$4), 
                    poster=$5
                WHERE movie_id=$6
                RETURNING *
                `, [title, relise_year, genre, studio,
                poster, movie_id]
            );
            res.json(updatedMovie.rows[0])
        } catch (error) {
            console.log(error)
        }
    }

    async deleteMovie(req, res) {
        try {
            const { movieId } = req.params;
            const delMovie = await db.query(
                `DELETE FROM movies
                WHERE movie_id=$1
                RETURNING *`,
                [movieId]
            );
            res.json(delMovie.rows[0])
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new MovieController();