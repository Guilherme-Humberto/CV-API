import { Camp } from '../../models/Campaigns'

export default {
    async create(req, res) {
        const { title } = req.body
        try {
            const camp = await Camp.findOne({ title })
            if(camp) return res.send({ error: "Campanha já existe" })
            return res.send({ camp })
        }
        catch (error) {
            return res.send({ error: "Erro ao criar campanha" })
        }
    } 
}