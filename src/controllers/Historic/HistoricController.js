import { Historic } from '../../models/Hist'

export default {
    async register(req, res) {
        try {
            const { user_id } = req.params
            const { local, typeDonation, date } = req.body

            const historic = await Historic.create({
                user: user_id,
                local,
                date,
                typeDonation
            })
            return res.json(historic)
        }
        catch (error) {
            res.send({ error: "Erro ao adicionar histórico" + error })
        }
    },
    async listar (req, res) {
        const { user_id } = req.params
        const registros = await Historic.find({ user: user_id }).populate("user")
        return res.json(registros)
    },

    async destroy (req, res) {
        const { id } = req.params
        await Historic.findByIdAndDelete(id)
    }
}