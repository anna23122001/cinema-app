const db = require('../db')

class StudioController{
    async getStudios(req, res) {
        try {
            const studios = await db.query(
                `SELECT title, year_foundation, location_id
                FROM studios
                ORDER BY studio_id
                `
            );
            res.json(studios.rows)
        } catch (error) {
            console.log(error)
        }
    }

    async getStudioById(req, res){ 
        try {
            const { studioId } = req.params;
            const studio = await db.query(  
                `SELECT
            studios.studio_id,
            studios.title AS studio_title,
            studios.year_foundation,
            studios.poster,
            locations.country AS location
            FROM studios
            JOIN locations 
            USING(location_id)
            WHERE studios.studio_id=$1
            `,
                [studioId]
            );
            res.json(studio.rows[0])
        } catch (error) {
            console.log(error)
        }
    }
    
    async createStudio(req, res) {
        try {
            const {
                title,
                year_foundation,
                location,
                poster} = req.body;
            const newStudio = await db.query(
                `INSERT INTO studios
                (title,
                year_foundation,
                location_id,
                poster)
                VALUES($1, $2, (
                    SELECT location_id 
                    FROM locations
                    WHERE country=$3
                    LIMIT 1), $4)
                RETURNING *
                `, [title, year_foundation, location, poster]
            );
            res.json(newStudio.rows[0])
        } catch (error) {
            console.log(error)
        }
    }

    async updateStudio(req, res) {
        try {
            const {
                title,
                year_foundation,
                location,
                poster,
                studio_id
            } = req.body;
            const updatedStudio = await db.query(
                `UPDATE studios
                    SET 
                    title=$1,
                    year_foundation=$2,
                    location_id=(
                        SELECT location_id 
                        FROM locations
                        WHERE country=$3), 
                    poster=$4
                    WHERE studio_id=$5
                    RETURNING *
                `, [title, year_foundation, location,
                poster, studio_id]
            );
            res.json(updatedStudio.rows[0])
        } catch (error) {
            console.log(error)
        }
    }

    async deleteStudio(req, res) {
        try {
            const { studioId } = req.params;
            const delStudio = await db.query(
                `DELETE FROM studios
                WHERE studio_id=$1
                RETURNING *`,
                [studioId]
            );
            res.json(delStudio.rows[0])
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new StudioController();