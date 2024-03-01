const controllers = require('../controllers/RequestTagscontroller')

async function RequestTagsRoutes (fastify,options) {
    fastify.get('/', controllers.getRequestTags)
    fastify.get('/:id', controllers.getRequestTagsByID)
    fastify.post('/', controllers.postRequestTags)
    fastify.put('/:id', controllers.putRequestTags)
    fastify.delete('/:id', controllers.deleteRequestTags)
    fastify.get('/lenght/:id', controllers.IsNewRqEp)
    fastify.get('/board', controllers.IsNewRqBoard)
}

module.exports = RequestTagsRoutes
