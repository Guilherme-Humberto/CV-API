import { app } from './index'
const port = process.env.PORT || 5001

app.listen(port, () => console.log(`Servidor conectado ${port}`))