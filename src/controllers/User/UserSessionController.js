import { User } from '../../models/User'
import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth.json'

export default {
    async authenticated(req, res) {
        const { email, password } = req.body
        try {
            const user = await User.findOne({ email, password })
            if(!user) {
                return res.send({ error: "Usuário não encontrado" })
            }
            
            const token = jwt.sign({ id: user.id }, authConfig.secret, {
                expiresIn: 86400
            })

            return res.send({ user, token })
        }
        catch (error) {
            return res.send({ error: `Erro ao logar usuário ${error}` })
        }
    },

    async forgotPassword (req, res) {
        const { email } = req.body
        const { id } = req.params

        if(!await User.findOne({ email })) {
            return res.send({ error: "Usuário não existe" })
        }

        const user = await User.findByIdAndUpdate(id, { password }, { new: true })
        return res.json(user)
    }
}