const Storys = require('../models/StoryModel')
const User = require('../models/UsersModel')
const Episode = require('../models/EpisodeModel')

const getStorys = async(request,reply) => {
    try{
        const stories = await Storys.find()
        reply.send(stories)
    }catch (error){
        reply.status(500).send(error)
    }   
}

const getStoryByID = async(request,reply) => {
    try{
        const story = await Storys.findById(request.params.id)
        reply.send(story)
    }catch (error){
        reply.status(500).send(error)
    }   
}

const getStoryByName = async(request,reply) => {
    try{
        var query = {
            ownerId: request.params.id
        };
        const story = await Storys.find(query)
        reply.send(story)
    }catch (error){
        reply.status(500).send(error)
    }   
}

const getStoryByCategory = async(request,reply) => {
    try{
        var query = {
            category: request.params.id,
            IsPublic: true
        };
        const story = await Storys.find(query)
        reply.send(story)
    }catch (error){
        reply.status(500).send(error)
    }   
}

const postStory = async(request,reply) => {
    try{
        
        if(request.body.EpisodeId != null){
            for(let epId of request.body.EpisodeId){
                const episode = await Episode.findById(epId)
                if(!episode){
                    return reply.status(400).send({message: `Invalid episode: ${epId}`})
                }
            }
        }
        const story = new Storys(request.body) 
        const result = story.save()
        reply.send(result)
    }catch (error){
        reply.status(500).send(error)
    }   
}

const putStory = async(request,reply) => {
    try{
        const story = await Storys.findByIdAndUpdate(request.params.id,request.body)
        reply.send(story)
    }catch (error){
        reply.status(500).send(error)
    }   
}

const deleteStory = async(request,reply) => {
    try{
        const story = await Storys.findByIdAndDelete(request.params.id)
        reply.status(203).send(story)
    }catch (error){
        reply.status(500).send(error)
    }   
}

const searchStory = async(request,reply) => {
    try{
        var query = {
            "$or":[
                {storyname: {$regex:request.params.id}}
            ]
        };
        const story = await Storys.find(query)
        reply.send(story)
    }catch (error){
        reply.status(500).send(error)
    }   
}


module.exports = {
    getStorys,
    getStoryByID,
    postStory,
    putStory,
    deleteStory,
    getStoryByName,
    getStoryByCategory,
    searchStory

}