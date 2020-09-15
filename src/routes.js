import express from 'express'
const router = express.Router()
import controller from './controllers/User/UserController'
import session from './controllers/User/UserSessionController'
import historic from './controllers/UserLogged/LoggedController'

router.post("/register", controller.create)
router.post("/login", session.authenticated)
router.post("/historic", historic.register)
router.get("/historic/list", historic.listar)

export { router }