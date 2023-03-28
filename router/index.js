const users = require('./userRouter')
const auths = require('./authRouter')

module.exports = {
    router: [
        users,
        auths,
    ]
}