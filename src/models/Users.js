import { Model, model, Schema } from 'mongoose'
import  crypto from 'crypto'

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: value => 
            crypto
                .createHash("md5")
                .update(value)
                .digest("hex")
    },
    age: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    }
})

const User = model("User", UserSchema)
export { User }