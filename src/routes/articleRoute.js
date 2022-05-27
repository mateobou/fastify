import { articles, articleSchema, articleSchemaId, articlesId, deleteArticles, deleteArticlesSchema, postArticles, postArticlesSchema } from './article.js'
/**
 * @type { import('fastify').FastifyPluginCallback }
 */
export async function articlesRoutes(app) {
  app.get('/articles', { schema: articleSchema }, articles)
  app.delete('/articles/:id', { schema: deleteArticlesSchema }, deleteArticles)
  app.get('/articles/:id', { schema: articleSchemaId }, articlesId)
  app.post('/articles',{schema:postArticlesSchema},postArticles)
}
