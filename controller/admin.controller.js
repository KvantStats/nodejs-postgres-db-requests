const db = require('../db')

class AdminController {
    async createAdmin(req, res) {
        const {login, password} = req.body
        const newAdmin = await db.query(`INSERT INTO admins (login, password) values ($1, $2) RETURNING *`, [login, password])
        res.json(`[SUCCESSFUL] Admin was added to database`)
    }

    async deleteAdmin(req, res) {
        const login = req.params.login
        const admin = await db.query("DELETE FROM admins WHERE login = $1", [login])
        res.json(`[SUCCESSFUL] Admin was deleted from database`)
    }
}

module.exports = new AdminController()