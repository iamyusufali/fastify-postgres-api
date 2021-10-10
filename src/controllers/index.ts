import { FastifyRequest, FastifyReply } from 'fastify';

namespace AppController {
  export const getItems = (request: FastifyRequest, reply: FastifyReply) => {
    reply.code(200).send([{ name: 'Yusuf', age: 23 }]);
  };
}

export default AppController;
