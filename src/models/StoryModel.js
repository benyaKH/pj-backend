const mongoose = require('mongoose')
const User = require("./UsersModel")
const Episode = require("./EpisodeModel")
const collection = 'Storys'

const StorySchema = mongoose.Schema({
    storyname: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        enum: ['Anime', 'Podcast', 'TV Series', 'Online Program','Others'],
        required: true
    },
    description: {
        type: String
    },
    ownerId: {
        type: String,
        required: true
    },
    IsPublic: {
        type: Boolean
    },
    image: {
        type: String
    }

})

module.exports = mongoose.model(collection, StorySchema)