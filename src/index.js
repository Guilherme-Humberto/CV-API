import express from 'express'
const app = express()
import bodyparser from 'body-parser'
import cors from 'cors'
import { router } from './routes'
import './database/connection'

app.use(cors())
app.use(express.json())
app.use(router)

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

export { app }