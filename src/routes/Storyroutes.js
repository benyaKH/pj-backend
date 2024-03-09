const controllers = require('../controllers/StoryController')

async function StoryRoutes (fastify,options) {
    fastify.get('/', controllers.getStorys)
    // fastify.get('/stories/:id', controllers.getStoryByID)
    fastify.post('/', controllers.postStory)
    fastify.put('/:id', controllers.putStory)
    fastify.delete('/:id', controllers.deleteStory)
    fastify.get('/owner/:id', controllers.getStoryByName)
    fastify.get('/:id', controllers.getStoryByID)
    fastify.get('/category/:id', controllers.getStoryByCategory)
    fastify.get('/search/:id', controllers.searchStory)
    fastify.get('/del', controllers.delField)
}

module.exports = StoryRoutes
