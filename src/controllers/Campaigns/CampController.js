const { Camp } = require ('../../models/Camp')

module.exports = {
    async create(req, res) {
        const { name } = req.body

        try {
            if(await Camp.findOne({ name })) {
                return res.send({ error: "Campanha já existe" })
            }
            const camp = await Camp.create(req.body)

            return res.json(camp)
        }
        catch (error) {
            return res.send({ error: "Erro ao criar campanha" + error })
        }
    },
    async list (req, res) {
        const { limit } = req.query
        const camp = await Camp.find().limit(parseInt(limit))
        return res.send(camp)
    },

    async destroy (req, res) {
        await Camp.findByIdAndDelete(req.params.id)
    }
}