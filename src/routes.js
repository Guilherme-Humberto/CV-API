import express from 'express'
const router = express.Router()
import controller from './controllers/User/UserController'
import session from './controllers/User/UserSessionController'

router.post("/register", controller.create)
router.post("/login", session.authenticated)

export { router }