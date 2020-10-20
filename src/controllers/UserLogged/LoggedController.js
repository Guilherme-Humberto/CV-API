import { Historic } from '../../models/Historics'

export default {
    async register(req, res) {
        try {
            const { user_id } = req.params
            const { local, date, typeDonation } = req.body

            if (await Historic.findOne({ date })) {
                return res.send({ error: "Você já fez essa doação" })
            }
            const teste = await Historic.create({
                user: user_id,
                local,
                date,
                typeDonation
            })
            return res.send({ teste })
        }
        catch (error) {
            res.send({ error: "Erro ao adicionar histórico" + error })
        }
    },
    async listar (req, res) {
        const { id } = req.params
        const registros = await Historic.findById({ id })
        return res.json(registros)
    }
}