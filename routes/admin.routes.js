const Router = require(`express`)
const router = new Router()
const adminController = require(`../controller/admin.controller`)

router.post('/admin', adminController.createAdmin)
router.delete('/admin/:login', adminController.deleteAdmin)



module.exports = router