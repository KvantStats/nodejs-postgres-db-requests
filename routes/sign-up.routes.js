const Router = require(`express`)
const router = new Router()
const signUpController = require(`../controller/sign-up.controller`)

router.post('/user', signUpController.makeSignUp)
router.delete('/user', signUpController.deleteUser)

module.exports = router