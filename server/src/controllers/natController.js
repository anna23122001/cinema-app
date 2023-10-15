const db = require('../db')

class NationController{
    async getNat(req, res) {
        try {
            const nationalities = await db.query(
                `SELECT national_id, title, description
                FROM nationalities
                ORDER BY national_id
                `
            );
            res.json(nationalities.rows)
        } catch (error) {
            console.log(error)
        }
    }

    async getNatById(req, res){ 
        try {
            const { nationalId } = req.params;
            const nation = await db.query(
                `SELECT
                    national_id,
                    title,
                    description
                    FROM nationalities
                WHERE national_id=$1`,
                [nationalId]
            );
            res.json(nation.rows[0])
        } catch (error) {
            console.log(error)
        }
    }

    async createNat(req, res) {
        try {
            const {
                title,
                description} = req.body;
            const newNat = await db.query(
                `INSERT INTO nationalities
                (title,
                description)
                VALUES($1, $2)
                RETURNING *
                `, [title, description]
            );
            res.json(newNat.rows[0])
        } catch (error) {
            console.log(error)
        }
    }
    async updateNat(req, res) {
        try {
            const {
                title,
                description,
                national_id
            } = req.body;
            const updatedNat = await db.query(
                `UPDATE nationalities
                    SET 
                    title=$1,
                    description=$2
                WHERE national_id=$3
                RETURNING *
                `, [title, description, national_id]
            );
            res.json(updatedNat.rows[0])
        } catch (error) {
            console.log(error)
        }
    }

    async deleteNat(req, res) {
        try {
            const { nationalId } = req.params;
            const delNat = await db.query(
                `DELETE FROM nationalities
                WHERE national_id=$1
                RETURNING *`,
                [nationalId]
            );
            res.json(delNat.rows[0])
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new NationController();