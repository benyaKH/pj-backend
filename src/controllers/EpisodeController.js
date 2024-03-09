const Stories = require('../models/StoryModel')
const Episodes = require('../models/EpisodeModel')

const getEpisodes = async (request, reply) => {
    try {
        const episodes = await Episodes.find()
        reply.send(episodes)
    } catch (error) {
        reply.status(500).send(error)
    }
}

const getEpisodeByID = async (request, reply) => {
    try {
        const episode = await Episodes.findById(request.params.id).populate(
            "StoryId", "storyname", Stories
        )
        reply.send(episode)
    } catch (error) {
        reply.status(500).send(error)
    }
}

const getEpisodeByStoryID = async (request, reply) => {
    try {
        var query = {
            StoryId: request.params.id
        };
        const episode = await Episodes.find(query)
        reply.send(episode)
    } catch (error) {
        reply.status(500).send(error)
    }
}

const postEpisode = async (request, reply) => {
    try {
        const story = await Stories.findById(request.body.StoryId)
        if (!story) {
            return reply.status(400).send({ message: 'Invalid story id' })
        }
        const episode = new Episodes(request.body)
        const result = episode.save()
        reply.send(result)
    } catch (error) {
        reply.status(500).send(error)
    }
}

const putEpisode = async (request, reply) => {
    try {
        const episode = await Episodes.findByIdAndUpdate(request.params.id, request.body)
        reply.send(episode)
    } catch (error) {
        reply.status(500).send(error)
    }
}

const deleteEpisode = async (request, reply) => {
    try {
        const episode = await Episodes.findByIdAndDelete(request.params.id)
        reply.status(203).send(episode)
    } catch (error) {
        reply.status(500).send(error)
    }
}
const searchEpisode = async (request, reply) => {
    try {
        var karr = request.query.keyword.split(',')
        var carr = request.query.chars.split(',')
        var narr = karr.join("|")
        var query = {
            StoryId: request.params.id,
            "$or": [
                { episodetitle: { $regex: narr  } },
                { description: { $regex: narr  } },
                { tags: { $all: karr } },
                { characters: { $all: carr } }

            ]
        };
        const episode = await Episodes.find(query)

        reply.send(episode)
    } catch (error) {
        reply.status(500).send(error)
    }
}

const distinctChar = async (request, reply) => {
    try {
        var query = {
            StoryId: request.params.id
        };
        const episode = await Episodes.distinct( "characters",query)
        reply.send(episode)
    } catch (error) {
        reply.status(500).send(error)
    }
}

module.exports = {
    getEpisodes,
    getEpisodeByID,
    getEpisodeByStoryID,
    postEpisode,
    putEpisode,
    deleteEpisode,
    searchEpisode,
    distinctChar

}