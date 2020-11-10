const { User } = require ('../../models/User')
const jwt = require ('jsonwebtoken')
const authConfig = require ('../../config/auth.json')

module.exports = {
    async create(req, res) {
        const { email } = req.body
        
        try {
            if(await User.findOne({ email })) {
                return res.send({ error: "Usuário já existe" })
            }
            const user = await User.create(req.body)

            const token = jwt.sign({ id: user.id }, authConfig.secret, {
                expiresIn: 86400
            })

            return res.send({ user, token })
        }
        catch (error) {
            return res.send({ error: `Erro ao criar usuário ${error}` })
        }
    },

    async listUser (req, res) {
        const user = await User.find();
        return res.send({ user })
    },

    async editUser (req, res) {
        const { filename } = req.file
        const { adress, number, bio, cell, blood } = req.body

        const user = await User.findByIdAndUpdate(req.params.id, {
            img: filename,
            adress,
            number,
            bio,
            cell,
            blood
        }, { new: true })
        return res.send(user)
    }
}