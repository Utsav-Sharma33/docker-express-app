const mongoose = require('mongoose');
const validators = require('validators');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate: [Validators.email, "Invalid Email"]
    },
    hash: String,
    salt: String
})

userSchema.pre('save', function (next) {
    this.salt = crypto.randomBytes(8).toString('hex');
    this.hash = crypto.pbkdf2Sync(this.password, this.salt, 1000, 64, 'sha512').toString('hex');
    console.log("salt && hash", this.salt, this.hash);
    if (this.salt && this.hash)
        next()
    else
        return next()
})

userSchema.methods.verifyPassword = function (password) {
    const _hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash == _hash
}

const User = mongoose.model('user', userSchema);
module.exports = User;