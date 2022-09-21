const db = require('../db')

class CertificateController {

    async createCertificate(req, res) {
        const {certificate_id} = req.body
        const newCertificate = await db.query(
            `INSERT INTO certificate_ids (certificate_id) values ($1) RETURNING *`, [certificate_id]
        )
        res.json(`[SUCCESSFUL] Certificate was added to database`)
    }

    async deleteCertificate(req, res) {
        const certificate_id = req.params.certificate_id
        const certificate = await db.query("DELETE FROM certificate_ids WHERE certificate_id = $1", [certificate_id])
        res.json(`[SUCCESSFUL] Certificate was deleted from database`)
    }

    async getCertificate(req, res) {
        const certificate_id = req.params.certificate_id
        const certificate = await db.query("SELECT * FROM certificate_ids WHERE certificate_id = $1", [certificate_id])
        res.json(certificate.rows)
    }


}

module.exports = new CertificateController()