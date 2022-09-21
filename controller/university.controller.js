const db = require('../db')

class UniversityController{
    async createUniversity(req, res) {
        const {university_id, university_name, university_city} = req.body
        const newUniversity = await db.query(
            `INSERT INTO university_info (university_id, university_name, university_city) values ($1, $2, $3) RETURNING *`,
            [university_id, university_name, university_city]
        )
        res.json(`[SUCCESSFUL] University was added to database`)
    }

    async deleteUniversity(req, res) {
        const university_id = req.params.university_id
        const university = await db.query("DELETE FROM university_info WHERE university_id = $1", [university_id])
        res.json(`[SUCCESSFUL] University was deleted from database`)
    }
}

module.exports = new UniversityController()