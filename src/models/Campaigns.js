import { Schema, model } from 'mongoose'

const CampSchema = new Schema({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

const Camp = model("Camp", CampSchema)
export  { Camp }