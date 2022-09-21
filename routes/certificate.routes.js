const Router = require('express')
const router = new Router()
const certificateController = require(`../controller/certificate.controller`)

router.post('/certificate', certificateController.createCertificate)
router.delete('/certificate/:certificate_id', certificateController.deleteCertificate)
router.get('/certificate/:certificate_id', certificateController.getCertificate)

module.exports = router
