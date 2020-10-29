import express from 'express'
const router = express.Router()
import controller from './controllers/User/UserController'
import session from './controllers/User/UserSessionController'
import historic from './controllers/Historic/HistoricController'
import campaigns from './controllers/Campaigns/CampController'
import institutions from './controllers/Institutions/InstController'

router.get("/listUser", controller.listUser)
router.post("/register", controller.create)
router.put("/editUser/:id", controller.editUser)
router.post("/login", session.authenticated)

router.post("/historic/:user_id", historic.register)
router.get("/historic/list/:user_id", historic.listar)
router.delete("/historic/:id", historic.destroy)

router.post("/campaign", campaigns.create)
router.get("/campaign", campaigns.list)
router.delete("/campaign/:id", campaigns.destroy)

router.post("/institutions", institutions.register)
router.get("/institutions", institutions.list)
router.get("/institutions/:id", institutions.getById)

export { router }