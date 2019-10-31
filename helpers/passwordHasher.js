const bcryptjs = require('bcryptjs')
let salt = bcryptjs.genSaltSync(11)

function hashPassword(password) {
    return bcryptjs.hashSync(password, salt)
}

function comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = {
    hashPassword, comparePassword
}