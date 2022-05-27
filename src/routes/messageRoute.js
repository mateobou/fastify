import { home, homeSchema } from './home.js'
import {hello, helloSchema} from './hello.js'
import {message, messageSchema, postMessage, postMessageSchema} from './message.js'
import { articles, articleSchema, articleSchemaId, articlesId, deleteArticles, deleteArticlesSchema, postArticles, postArticlesSchema } from './article.js'
/**
 * @type { import('fastify').FastifyPluginCallback }
 */
export async function messagesRoute(app) {
  app.get('/message', { schema: messageSchema }, message)
  app.post('/message', { schema: postMessageSchema }, postMessage )
}
