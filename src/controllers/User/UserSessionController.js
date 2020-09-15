import { User } from '../../models/Users'

export default {
    async authenticated(req, res) {
        const { email, password } = req.body
        try {
            const user = await User.findOne({ email, password })
            if(!user) return res.send({ error: "Usuário não encontrado" })
            return res.send({ user })
        }
        catch (error) {
            return res.send({ error: `Erro ao logar usuário ${error}` })
        }
    }
}