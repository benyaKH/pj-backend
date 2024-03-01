const controllers = require('../controllers/UsersContoller')

async function userRoutes (fastify,options) {
    fastify.get('/', controllers.getUsers)
    fastify.get('/:id', controllers.getUserByID)
    fastify.post('/', controllers.postUser)
    fastify.put('/:id', controllers.putUser)
    fastify.delete('/:id', controllers.deleteUser)
}

module.exports = userRoutes
