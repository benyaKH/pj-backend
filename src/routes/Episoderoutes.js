const controllers = require('../controllers/EpisodeController')

async function epRoutes (fastify,options) {
    fastify.get('/', controllers.getEpisodes)
    fastify.get('/:id', controllers.getEpisodeByID)
    fastify.get('/story/:id', controllers.getEpisodeByStoryID)
    fastify.post('/', controllers.postEpisode)
    fastify.put('/:id', controllers.putEpisode)
    fastify.delete('/:id', controllers.deleteEpisode)
    fastify.get('/search/:id', controllers.searchEpisode)
}

module.exports = epRoutes
