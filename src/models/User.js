// Model de usuário

const { model, Schema } = require ('mongoose')
const bcrypt = require ('bcryptjs')

const UserSchema = new Schema({
    name: String,
    img: {
        type: String,
        required: false
    },
    email: String,
    password: String,
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

UserSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

UserSchema.virtual('image_url').get(function() {
    return `http://localhost:5001/files/${this.img}`
})

const User = model("User", UserSchema)
module.exports = { User }