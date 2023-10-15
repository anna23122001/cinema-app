const db = require('../db')

class ActorController{
    async getActors(req, res) {
        try {
            const actors = await db.query(
                `SELECT full_name, birth_year, actor_id
                FROM actors
                ORDER BY actor_id
                `
            );
            console.log(actors.rows)
            res.json(actors.rows)
        } catch (error) {
            console.log(error)
        }
    }

    async getActorById(req, res){ 
        try {
            const { actorId } = req.params;
            const actor = await db.query(
                `SELECT
                    actor_id,
                    full_name,
                    birth_year,
                    death_year,
                    poster,
                nat.description AS nationality
                FROM actors
                JOIN nationalities AS nat
                USING(national_id)
                WHERE actor_id=$1`,
                [actorId]
            );
            console.log(actor.rows[0]);
            res.json(actor.rows[0])
        } catch (error) {
            console.log(error)
        }
    }

    async createActor(req, res) {
        try {
            const {
                full_name,
                birth_year,
                death_year,
                nationality,
                poster} = req.body;
            const newActor = await db.query(
                `INSERT INTO actors
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
            res.json(newActor.rows[0])
        } catch (error) {
            console.log(error)
        }
    }
    async updateActor(req, res) {
        try {
            const {
                full_name,
                birth_year,
                death_year,
                nationality,
                poster,
                actor_id
            } = req.body;
            const updatedActor = await db.query(
                `UPDATE actors
                    SET 
                    full_name=$1,
                    birth_year=$2,
                    death_year=$3,
                    national_id=(
                        SELECT national_id 
                        FROM nationalities
                        WHERE title=$4), 
                    poster=$5
                WHERE actor_id=$6
                RETURNING *
                `, [full_name, birth_year, death_year, nationality,
                poster, actor_id]
            );
            res.json(updatedActor.rows[0])
        } catch (error) {
            console.log(error)
        }
    }

    async deleteActor(req, res) {
        try {
            const { actorId } = req.params;
            const delActor = await db.query(
                `DELETE FROM actors
                WHERE actor_id=$1
                RETURNING *`,
                [actorId]
            );
            res.json(delActor.rows[0])
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new ActorController();
