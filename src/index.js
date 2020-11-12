// Configurando servidor

const express = require ('express')
const app = express()
const bodyparser = require ('body-parser')
const cors = require ('cors')
const path = require ('path')
const { router } = require ('./routes')

require('./database/connection')

app.use(cors())
app.use(express.json())
app.use(router)

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use('/files', express.static(path.resolve(__dirname, '..', 'temp', 'uploads')));

app.listen(process.env.PORT || 5001, () => console.log("Conectado ao servidor"))
