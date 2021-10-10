import { FastifySchema } from 'fastify';

namespace AppSchemas {
  export const GetItems: FastifySchema = {
    response: {
      200: {},
    },
  };
}

export default AppSchemas;
