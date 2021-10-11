import { FastifySchema } from 'fastify';

const Player = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    club: { type: 'string' },
  },
};

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
    response: { 200: Player },
  };

  export const GetPlayers: FastifySchema = {
    response: {
      200: { type: 'array', items: Player },
    },
  };

  export const GetPlayerById: FastifySchema = {
    response: { 200: Player },
  };

  export const UpdatePlayer: FastifySchema = {
    response: { 200: { type: 'string' } },
  };
}

export default PlayerSchemas;
