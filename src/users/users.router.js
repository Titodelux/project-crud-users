const router = require('express').Router()
const usersServices = require('./users.services')

router.get('/users', usersServices.getAllUsers)
router.post('/users', usersServices.postUser)
router.get('/users/:id', usersServices.getUserById)
router.delete('/users/:id', usersServices.deleteUser)
router.put('/users/:id', usersServices.putUser)

module.exports = router