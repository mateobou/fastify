/**
 * @type { import("fastify").FastifySchema }
 */
 export const helloSchema = {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  }
  
  /**
   * @type { import("fastify").RouteHandlerMethod }
   */
  export function hello(req, reply) {
    
    req.query.name === "" ||req.query.name === undefined ? reply.send({message:"Hello world"}) : reply.send({message:"Hello "+req.query.name})
  }
  