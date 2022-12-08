const usersController = require("./users.controller")

const getAllUsers = (req, res) => {
    const users = usersController.showUsers()
    res.status(200).json(users)
}

const getUserById = (req, res) => {
    const id = req.params.id
    const user = usersController.showUserById(id)
    if(user){
        res.status(200).json(user)
    } else {
        res.status(404).json({
            message: "user not found: invalid id"
        })
    }
}

const postUser = (req, res) => {
    const user = req.body
    if(user.first_name && user.email && user.password){
        const newUser = usersController.createUser(user)
        res.status(201).json(newUser)
    } else {
        res.status(400).json({
            message: "invalid data",
            fields: {
                first_name: 'string*',
                last_name: 'string',
                email: 'string*',
                password: 'string*',
                birthday: 'YYYY/MM/DD'
            }
        })
    } 
}

const deleteUser = (req, res) => {
    const idUser = req.params.id
    const deletedUser = usersController.deleteUser(idUser)
    console.log(deletedUser)
    if(deletedUser){
        res.status(202).json(deletedUser)
    } else {
        res.status(404).json({
            message: "user not found: invalid id"
        })
    }
}

const putUser = (req, res) => {
    const idUser = req.params.id
    const userModified = req.body
    if(userModified.first_name && userModified.email && userModified.password){
        const newUser = usersController.modifyUser(idUser, userModified)
        res.status(201).json(newUser)
    } else {
        res.status(400).json({
            message: "invalid data",
            fields: {
                first_name: 'string*',
                last_name: 'string',
                email: 'string*',
                password: 'string*',    
                birthday: 'YYYY/MM/DD'
            }
        })
    } 
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    deleteUser,
    putUser,
}