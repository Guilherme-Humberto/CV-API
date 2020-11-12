// Controller autenticação do usuário

const { User } = require ('../../models/User')
const jwt = require ('jsonwebtoken')
const authConfig = require ('../../config/auth.json')

module.exports = {
    async authenticated(req, res) {
        const { email, password } = req.body
        try {
            const user = await User.findOne({ email, password })
            if(!user) {
                return res.status(401).jsno("Usuário não encontrado")
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
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if(!user) {
            return res.send({ error: "Usuário não existe" })
        }

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 86400
        })

        const users = await User.findOneAndUpdate({ email }, { password }, { new: true })
        return res.send({ users, token })
    }
}