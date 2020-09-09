import { Inst } from '../../models/Institutions'

export default {
    async register(req, res) {
        const { name } = req.body
        try {
            const inst = await Inst.findOne({ name })
            if(inst) return res.send({ error: "Instituição já cadastrada" })
            return res.send({ inst })
        }
        catch (error) {
            return res.send({ error: `Erro ao registrar instituição ${error}` })
        }
    }
}