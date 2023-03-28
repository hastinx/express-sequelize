const db = require('../models')
const users = db.User

module.exports = {
    register: async (req, res) => {
        try {
            const data = await users.create(req.body)
            res.json({
                status: 200,
                message: 'Register user successfully',
                values: data
            })
        } catch (error) {
            res.json({
                status: 400,
                message: 'Register user failed',
                error: error
            })
        }
    }
}