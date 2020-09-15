import { Schema, model } from 'mongoose'

const HistoricSchema = new Schema({
    local: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
        unique: true
    },
    typeDonation: {
        type: String,
        required: true
    }
})

const Historic = model("Historic", HistoricSchema)
export { Historic }