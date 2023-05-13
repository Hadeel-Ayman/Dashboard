const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 8,
        validate(pass) {
            const myRe = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])")
            if (!myRe.test(pass)) {
                throw new Error('password must contain uppercase , lowercase , numbers, special character')
            }
        }
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error('Invalid email')
            }
        }
    },
})

UserSchema.pre('save', async function () {
    const user = this
    user.password = await bcryptjs.hash(user.password, 8)
})


//login
UserSchema.statics.findByCredentials = async (emailOfBody, passwordOfBody) => {
    const user = await UserModel.findOne({ email: emailOfBody })

    if (!user) {
        throw new Error('Unable to login')
    }

    const PasswordMatch = await bcryptjs.compare(passwordOfBody, user.password)
    if (!PasswordMatch) {
        throw new Error('Unable to login')
    }

    return user
}

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel