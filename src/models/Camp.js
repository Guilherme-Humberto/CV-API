// Model de campanhas

const { Schema, model } = require ('mongoose')

const CampSchema = new Schema({
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

const Camp = model("Camp", CampSchema)
module.exports = { Camp }