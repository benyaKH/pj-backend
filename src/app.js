const fastify = require('fastify')({ logger: true })
const cors = require('@fastify/cors') 
const config = require('./config')
const mongoose =require('mongoose')

const userRoutes = require('./routes/Userroutes')
const storyRoutes = require('./routes/Storyroutes')
const epRoutes = require('./routes/Episoderoutes')
const rqtagsRoutes = require('./routes/RequestTagsroutes')


mongoose
  .connect('mongodb+srv://kobfang:1234@project66.nviqlil.mongodb.net/basic101', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database"))
  .catch((e) => console.log("Error connecting to database", e));

// start my server
fastify.register(cors, { 
  origin:"http://localhost:5173"
})
fastify.register(userRoutes, { prefix: "/users" });
fastify.register(storyRoutes, { prefix: "/stories" });
fastify.register(epRoutes, { prefix: "/episodes" });
fastify.register(rqtagsRoutes, { prefix: "/rqtags" });

const start = async () => {
  try {
    await fastify.listen(config.port, "0.0.0.0",config.hostname)
    console.log(`app is listening on port ${config.port}`)

  } catch (error) {
    throw error
  }
};

start()
