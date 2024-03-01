const RequestTags = require('../models/RequestTagsModel')
const Episode = require('../models/EpisodeModel')

const getRequestTags = async(request,reply) => {
    try{
        const users = await RequestTags.find()
        reply.send(users)
    }catch (error){
        reply.status(500).send(error)
    }   
}

const getRequestTagsByID = async(request,reply) => {
    try{
        var query = {
            episodeId: request.params.id
        };
        const user = await RequestTags.find(query)
        reply.send(user)
    }catch (error){
        reply.status(500).send(error)
    }   
}

const postRequestTags = async(request,reply) => {
    try{
        const episode = await Episode.findById(request.body.episodeId)
        if(!episode){
            return reply.status(400).send({message: 'Invalid episode id'})
        }
        const user = new RequestTags(request.body) 
        const result = user.save()
        reply.send(result)
    }catch (error){
        reply.status(500).send(error)
    }   
}

const putRequestTags = async(request,reply) => {
    try{
        const user = await RequestTags.findByIdAndUpdate(request.params.id,request.body)
        reply.send(user)
    }catch (error){
        reply.status(500).send(error)
    }   
}

const deleteRequestTags = async(request,reply) => {
    try{
        await RequestTags.findByIdAndDelete(request.params.id)
        reply.status(203).send("")
    }catch (error){
        reply.status(500).send(error)
    }   
}

const IsNewRqEp = async(request,reply) => {
    try{
        var query = {
            storyId: request.params.id
        };
        const distinctValues = await RequestTags.distinct("episodeId", query);
        reply.send(distinctValues)
    }catch (error){
        reply.status(500).send(error)
    }   
}

const IsNewRqBoard = async(request,reply) => {
    try{
        const distinctValues = await RequestTags.distinct("storyId");
        reply.send(distinctValues)
    }catch (error){
        reply.status(500).send(error)
    }   
}

module.exports = {
    getRequestTags,
    getRequestTagsByID,
    postRequestTags,
    putRequestTags,
    deleteRequestTags,
    IsNewRqEp,
    IsNewRqBoard

}