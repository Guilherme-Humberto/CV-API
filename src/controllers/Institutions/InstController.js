import { Inst } from '../../models/Inst'

export default {
    async register(req, res) {
        const { name } = req.body
        try {
            if(await Inst.findOne({ name })) {
                return res.send({ error: "Instituição já cadastrada" })
            }
                
            const inst = await Inst.create(req.body)
            return res.json(inst)
        }
        catch (error) {
            return res.send({ error: `Erro ao registrar instituição ${error}` })
        }
    },

    async list (req, res) {
        const institutions = await Inst.find()
        return res.json(institutions)
    },

    async getById (req, res) {
        const institutions = await Inst.findById(req.params.id)
        return res.json(institutions)
    }
}