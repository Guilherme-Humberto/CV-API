// Controller autenticação do usuário

const { User } = require ('../../models/User')
const jwt = require ('jsonwebtoken')
const bcrypt = require("bcryptjs")
const authConfig = require ('../../config/auth.json')

module.exports = {
    async authenticated(req, res) {
        try {
            const { email, password } = req.body

            const user = await User.findOne({ email })
            if(!user) {
                return res.status(401).send({ error: "Usuário não encontrado"})
            }

            if(!await bcrypt.compare(password, user.password)) {
                return status(401).send({ error: "Senha inválida" })
            }

            const token = jwt.sign({ id: user.id }, authConfig.secret, {
                expiresIn: 86400
            })

            return res.send({ user, token })
        }
        catch (error) {
            return res.status(401).send({ error: `Erro ao logar usuário ${error}` })
        }
    },

    async forgotPassword (req, res) {
        const { email, password } = req.body

        let user = await User.findOne({ email })
        if(!user) {
            return res.send({ error: "Usuário não encontrado" })
        }

        const hash = await bcrypt.hash(password, 10)

        const newUser = await User.findOneAndUpdate(email, {
            password: hash
        }, { new: true })

        return res.send({ newUser })
    }
}