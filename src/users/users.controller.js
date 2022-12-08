const usersDB = []
let id = 1


const showUsers = () => {
    return usersDB
}

const showUserById = (id) => {
    const filteredUser = usersDB.find(item => item.id == id)
    return filteredUser
}

const createUser = (obj) => {
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name || "unknown",
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday || "unknown",
    }
    usersDB.push(newUser)
    return newUser
}

const deleteUser = (id) => {
    for (let index = 0; index < usersDB.length; index++) {
        if(usersDB[index].id == id){
            const deletedUser = usersDB[index]
            usersDB.splice(index, 1)
            return deletedUser
        }
    }
    return null
}

const modifyUser = (id, userModified) => {
    for (let index = 0; index < usersDB.length; index++) {
        if(usersDB[index].id == id){
            userModified.id = Number(id)
            const oldUser = usersDB.splice(index, 1, userModified) 
            return oldUser
        }
    }
    return null 
}

module.exports = {
    showUsers,
    showUserById,
    createUser,
    deleteUser,
    modifyUser,
}
