import { FastifySchema } from 'fastify';

namespace PlayerSchemas {
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
          name: { type: 'string' },
          club: { type: 'string' },
        },
      },
    },
  };

  export const GetPlayers: FastifySchema = {
    response: {
      200: {
        type: 'array',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          club: { type: 'string' },
        },
      },
    },
  };
}

export default PlayerSchemas;
