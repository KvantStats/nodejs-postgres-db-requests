const Router = require(`express`)
const router = new Router()
const universityController = require(`../controller/university.controller`)

router.post('/university', universityController.createUniversity)
router.delete('/university/:university_id', universityController.deleteUniversity)


module.exports = router