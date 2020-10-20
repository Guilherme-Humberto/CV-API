import express from 'express'
const router = express.Router()
import controller from './controllers/User/UserController'
import session from './controllers/User/UserSessionController'
import historic from './controllers/UserLogged/LoggedController'

router.get("/listUser", controller.listUser)
router.post("/register", controller.create)
router.put("/editUser/:id", controller.editUser)
router.post("/login", session.authenticated)
router.post("/historic/:user_id", historic.register)
router.get("/historic/list/:user_id", historic.listar)

export { router }