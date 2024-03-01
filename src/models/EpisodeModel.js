const mongoose = require('mongoose')
const Story = require("./StoryModel")
const collection = 'Episodes'

const EpisodeSchema = mongoose.Schema({
    number: {
        type: Number,
        required: true
        },
    episodetitle: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    tags:[
        {
            type: String,
            ref: "Tag"
        }
    ],
    characters:[
        {
            type: String,
            ref: "Character"
        }
    ],
    StoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Story",
        required: true
    },
    Links: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model(collection, EpisodeSchema)