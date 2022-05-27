import { home, homeSchema } from './home.js'
import {hello, helloSchema} from './hello.js'
import {message, messageSchema, postMessage, postMessageSchema} from './message.js'
import { articles, articleSchema, articleSchemaId, articlesId, deleteArticles, deleteArticlesSchema, postArticles, postArticlesSchema } from './article.js'
/**
 * @type { import('fastify').FastifyPluginCallback }
 */
export async function helloRoutes(app) {
  app.get('/', { schema: homeSchema }, home)
  app.get('/hello', { schema: helloSchema }, hello)
}
