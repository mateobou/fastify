
/**
 * @type { import("fastify").FastifySchema }
 */
 export const messageSchema = {
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
  export function message(req, reply) {
    
    req.query.message != undefined && req.params.random != undefined ? reply.send({message:'Message received'}) : reply.send({message:'Error 404'})
  }
  
  //POST 

const messages = [] // fake message store
export const postMessageSchema = {
  body: {
    type: 'object',
    properties: {
      random: { type: 'string' },
      message: { type: 'string' },
    },
      additionalProperties: false,
 required: ['message'],
   },
}
export function postMessage(request, reply){
  const message = request.body.message
  messages.push(message)
 
  reply.send({ message: 'Message received', data:{message,random:request.body.random}})
}