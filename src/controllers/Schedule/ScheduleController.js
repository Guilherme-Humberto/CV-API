import { Schedule } from '../../models/Schedule'

export default {
    async register(req, res) {
        const { user_id } = req.headers
        const { inst_id } = req.headers
        try {
            
            const schedule = await Schedule({
                user: user_id,
                inst: inst_id
            })
        }
        catch (error) {
            return res.send({ error: `Erro ao registrar instituição ${error}` })
        }
    }
}