import { Historic } from '../../models/Historics'

export default {
    async register(req, res) {
        try {
            const { date } = req.body

            if (await Historic.findOne({ date })) {
                return res.send({ error: "Você já fez essa doação" })
            }
            const teste = await Historic.create(req.body)
            return teste
        }
        catch (error) {
            res.send({ error: "Erro ao adicionar histórico" + error })
        }
    },
    async listar (req, res) {
        const registros = await Historic.find()
        return res.send({ registros })
    }
}