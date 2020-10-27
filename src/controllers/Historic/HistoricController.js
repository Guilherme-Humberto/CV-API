import { Historic } from '../../models/Historics'

export default {
    async register(req, res) {
        try {
            const { user_id } = req.params
            const { local, date, typeDonation } = req.body

            if (await Historic.findOne({ date })) {
                return res.send({ error: "Você já fez essa doação" })
            }
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
        const registros = await Historic.find({ user: user_id })
        return res.json(registros)
    },

    // async destroy (req, res) {
    //     const { user_id } = req.params
    //     await Historic.findByIdAndDelete(user_id)
    // }
}