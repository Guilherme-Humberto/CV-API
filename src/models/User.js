// Model de usuário

const { model, Schema } = require ('mongoose')
const  crypto = require ('crypto')

const UserSchema = new Schema({
    name: String,
    img: {
        type: String,
        required: false
    },
    email: String,
    password: {
        type: String,
        set: value => 
            crypto
                .createHash("md5")
                .update(value)
                .digest("hex")
    },
    age: String,
    adress: String,
    number: Number,
    bio: String,
    cell: String,
    blood: String
}, {
    toJSON: {
        virtuals: true
    }
})

UserSchema.virtual('image_url').get(function() {
    return `http://localhost:5001/files/${this.img}`
})

const User = model("User", UserSchema)
module.exports = { User }