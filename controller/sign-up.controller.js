const db = require('../db')

class SignUpController {

    async makeSignUp(req, res) {
        const {certificate_id, user_id, university_id, user_name, user_surname, user_patronymic} = req.body
        const newUserInfo = await db.query(
            `INSERT INTO user_info (user_id, user_name, user_surname, user_patronymic) values ($1, $2, $3, $4)`,
            [user_id, user_name, user_surname, user_patronymic])
        const newUser = await db.query(
            `INSERT INTO users (certificate_id, user_id, university_id) values ($1, $2, $3)`,
            [certificate_id, user_id, university_id]
        )
        res.json(`[SUCCESSFUL] User was added to database`)
    }

    async deleteUser(req, res) {
        const {certificate_id, user_id} = req.body
        const user = await db.query(`DELETE FROM users WHERE certificate_id = $1`, [certificate_id])
        const user_info = await db.query(`DELETE FROM user_info WHERE user_id = $1`, [user_id])
        res.json(`[SUCCESSFUL] User was deleted from database`)
    }


}

module.exports = new SignUpController()