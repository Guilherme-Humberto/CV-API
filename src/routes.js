const express = require ('express')
const router = express.Router()
const multer = require ('multer')
const multerConfig = require ('./config/multer')

const controller = require ('./controllers/User/UserController')
const session = require ('./controllers/User/UserSessionController')
const historic = require ('./controllers/Historic/HistoricController')
const campaigns = require ('./controllers/Campaigns/CampController')
const institutions = require ('./controllers/Institutions/InstController')

router.get("/listUser", controller.listUser)
router.post("/register", controller.create)
router.put("/editUser/:id", multer(multerConfig).single('img'), controller.editUser)
router.post("/login", session.authenticated)
router.post("/forgot", session.forgotPassword)

router.post("/historic/:user_id", historic.register)
router.get("/historic/list/:user_id", historic.listar)
router.delete("/historic/:id", historic.destroy)

router.post("/campaign", campaigns.create)
router.get("/campaign", campaigns.list)
router.delete("/campaign/:id", campaigns.destroy)

router.post("/institutions", institutions.register)
router.get("/institutions", institutions.list)
router.get("/institutions/:id", institutions.getById)

module.exports = { router }