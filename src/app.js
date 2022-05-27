import fastify from 'fastify'

import { helloRoutes } from './routes/index.js'
import { messagesRoute } from './routes/messageRoute.js'
import { articlesRoutes } from './routes/articleRoute.js'

/**
 * @param { import('fastify').FastifyServerOptions } options
 */
export function build(options = {}) {
  const app = fastify(options)

  app.register(helloRoutes)
  app.register(messagesRoute)
  app.register(articlesRoutes)

  return app
}