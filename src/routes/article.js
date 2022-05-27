/**
 * @type { import("fastify").FastifySchema }
 */
const Articles = [{ id: 1, title: 'Fake article 1' },{ id: 2, title: 'Fake article 2' }]
 export const articleSchema = {
    response: {
      200: {
        type: 'array',
        properties: {
            id: { type: 'number' },
            title: { type: 'string' },
        },
        required: ['id', 'title'],
        additionalProperties: false, // remove other propertiers
      },
    },
  }
  
  /**
   * @type { import("fastify").RouteHandlerMethod }
   */
  export function articles(req, reply) {

    reply.send([{ id: 1, title: 'Fake article 1' },{ id: 2, title: 'Fake article 2' }])
  }
  
  export const articleSchemaId = {
    params: {
        type: 'object',
        properties: { id: { type: 'number' } },
    },
    response: {
      200: {
        type: 'object',
        properties: {
            id: { type: 'number' },
            title: { type: 'string' },
        },
        additionalProperties: false, // remove other propertiers
      },
    },
  }
  
  /**
   * @type { import("fastify").RouteHandlerMethod }
   */
  export function articlesId(req, reply) {
    const id = req.params.id
    const article = Articles.find((a) => a.id === id)
    if (!article) {
        return reply.code(404).send({ error: 'Article '+id+' not found' })
    }
    reply.send({ ...article })


  }


//POST


export const postArticlesSchema = {
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
    },
    required: ['title'],
    additionalProperties: false,
  },
}
export function postArticles(request, reply){
  const title = request.body.title
  Articles.push(title)
 
  reply.code(201).send({ message: "Article created"})
}
  
//Delete

export const deleteArticlesSchema = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'number' },
    },
    required: ['id'],
    additionalProperties: false,
  },
}
export function deleteArticles(request, reply){
   const id = request.params.id
    const article = Articles.find((a) => a.id === id)
    if(article){
      return reply.code(200).send({ message: `Article deleted` })
    }
    return reply.code(404).send({ error: "Article "+id+" not found" })
}
  