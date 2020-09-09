import { User } from '../../models/User'

export default {
    async create(req, res) {
        const { email } = req.body
        try {
            if(await User.findOne({ email })) {
                return res.send({ error: "Usuário já existe" })
            }
            const user = await User.create(req.body)
            return console.log({ user })
        }
        catch (error) {
            return res.send({ error: `Erro ao criar usuário ${error}` })
        }
    }
}