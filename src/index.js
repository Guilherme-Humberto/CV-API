import express from 'express'
const app = express()
import bodyparser from 'body-parser'
import cors from 'cors'
import path from 'path'
import { router } from './routes'

import './database/connection'

app.use(cors())
app.use(express.json())
app.use(router)

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use('/files', express.static(path.resolve(__dirname, '..', 'temp', 'uploads')));

export { app }