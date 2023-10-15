const db = require('../db')

class DirectorController{
    async getDirectors(req, res) {
        try {
            const directors = await db.query(
                `SELECT full_name, birth_year, director_id,  nat.description AS nationality
                FROM directors
                JOIN nationalities AS nat
                USING (national_id)
                ORDER BY director_id
                `
            );
            res.json(directors.rows)
        } catch (error) {
            console.log(error)
        }
    }
     async getDirectorById(req, res){ 
        try {
            const { directorId } = req.params;
            const director = await db.query(
                `SELECT
                    director_id,
                    full_name,
                    birth_year,
                    death_year,
                    poster,
                nat.description AS nationality
                FROM directors
                JOIN nationalities AS nat
                USING(national_id)
                WHERE director_id=$1`,
                [directorId]
            );
            res.json(director.rows[0])
        } catch (error) {
            console.log(error)
        }
    }

    async createDirector(req, res) {
        try {
            const {
                full_name,
                birth_year,
                death_year,
                nationality,
                poster} = req.body;
            const newDirector = await db.query(
                `INSERT INTO directors
                (full_name,
                birth_year,
                death_year,
                national_id,
                poster)
                VALUES($1, $2, $3, (
                    SELECT national_id 
                    FROM nationalities
                    WHERE title=$4), $5)
                RETURNING *
                `, [full_name, birth_year, death_year, nationality, poster]
            );
            res.json(newDirector.rows[0])
        } catch (error) {
            console.log(error)
        }
    }
    async updateDirector(req, res) {
        try {
            const {
                full_name,
                birth_year,
                death_year,
                nationality,
                poster,
                director_id
            } = req.body;
            const updatedDirector = await db.query(
                `UPDATE directors
                    SET 
                    full_name=$1,
                    birth_year=$2,
                    death_year=$3,
                    national_id=(
                        SELECT national_id 
                        FROM nationalities
                        WHERE title=$4), 
                    poster=$5
                WHERE director_id=$6
                RETURNING *
                `, [full_name, birth_year, death_year, nationality,
                poster, director_id]
            );
            res.json(updatedDirector.rows[0])
        } catch (error) {
            console.log(error)
        }
    }

    async deleteDirector(req, res) {
        try {
            const { directorId } = req.params;
            const delDirector = await db.query(
                `DELETE FROM directors
                WHERE director_id=$1
                RETURNING *`,
                [directorId]
            );
            res.json(delDirector.rows[0])
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new DirectorController();

