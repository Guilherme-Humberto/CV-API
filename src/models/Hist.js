const { Schema, model } = require ('mongoose')

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
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Historic = model("Historic", HistoricSchema)
module.exports = { Historic }