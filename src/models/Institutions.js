import { Schema, model } from 'mongoose'

const InstSchema = new Schema({
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

const Inst = model("Inst", InstSchema)
export { Inst }