import { model, Schema } from 'mongoose'
import  crypto from 'crypto'

const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
        set: value => 
            crypto
                .createHash("md5")
                .update(value)
                .digest("hex")
    },
    age: {
        type: String
    },
    cpf: {
        type: String
    },

    // Campos opicionais
    bio: { required: false, type: String },
    adress: { required: false, type: String },
    cell: { required: false, type: String },
    phone: { required: false, type: String },
    bloodtype: { required: false, type: String },
})

const User = model("User", UserSchema)
export { User }