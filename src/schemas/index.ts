import { FastifySchema } from 'fastify';

namespace AppSchemas {
  export const AddPlayer: FastifySchema = {
    body: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        club: { type: 'string' },
      },
      required: ['name', 'club'],
    },
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          club: { type: 'string' },
        },
      },
    },
  };
}

export default AppSchemas;
