import { connect } from 'mongoose'
import 'dotenv/config'

connect(process.env.DB_CONNECTION, {  
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Conectado ao banco de dados"))
.catch(err => console.log(`Erro ao conectar ao banco de dados ${err}`))