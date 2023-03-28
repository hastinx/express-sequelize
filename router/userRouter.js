const { users } = require('../controllers')

const router = require('express').Router()

router.get('/users', users.getAllUsers)
router.get('/users', users.getUsersById)
router.get('/users/total', users.getTotalUsers)

module.exports = router