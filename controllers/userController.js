const { sequelize } = require('../models')
const db = require('../models')
const users = db.User
module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const user = await users.findAll(
                {
                    attributes: ['id', 'userName', 'email', 'age']
                }
            )

            res.json({
                status: 200,
                values: user
            })
        } catch (error) {
            console.log(error)
        }
    },
    getUsersById: async (req, res) => {

        try {

            let user = await users.findAll(
                {
                    where: {
                        id: req.query.id
                    },
                    attributes: ['id', 'userName', 'email', 'age']
                }
            )
            res.json({
                status: 200,
                values: user
            })
        } catch (error) {
            // console.log(error)
            res.json({
                status: 400,
                message: "Data not found"
            })
        }
    },
    getTotalUsers: async (req, res) => {
        try {

            const total = await users.count({
                col: 'id',
            });


            res.json({
                status: 200,
                values: total
            })
        } catch (error) {
            res.json({
                status: 400,
                message: "Data not found"
            })
        }
    }
}