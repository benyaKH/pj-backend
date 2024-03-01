const User = require('../models/UsersModel')

const getUsers = async(request,reply) => {
    try{
        const users = await User.find()
        reply.send(users)
    }catch (error){
        reply.status(500).send(error)
    }   
}

const getUserByID = async(request,reply) => {
    try{
        const user = await User.findById(request.params.id)
        reply.send(user)
    }catch (error){
        reply.status(500).send(error)
    }   
}

const postUser = async(request,reply) => {
    try{
        const user = new User(request.body) 
        const result = user.save()
        reply.send(result)
    }catch (error){
        reply.status(500).send(error)
    }   
}

const putUser = async(request,reply) => {
    try{
        const user = await User.findByIdAndUpdate(request.params.id,request.body)
        reply.send(user)
    }catch (error){
        reply.status(500).send(error)
    }   
}

const deleteUser = async(request,reply) => {
    try{
        await User.findByIdAndDelete(request.params.id)
        reply.status(203).send("")
    }catch (error){
        reply.status(500).send(error)
    }   
}

module.exports = {
    getUsers,
    getUserByID,
    postUser,
    putUser,
    deleteUser

}