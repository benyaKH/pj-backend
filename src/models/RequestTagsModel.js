const mongoose = require('mongoose')
const User = require("./UsersModel")
const Episode = require("./EpisodeModel")
const collection = 'RequestTags'

const RequestTagSchema = mongoose.Schema({
    tag: {
        type: String,
        required: true,
        unique: true
    },
    episodeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Episode",
        required: true
    },
    storyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Story",
        required: true
    }
})

module.exports = mongoose.model(collection, RequestTagSchema)