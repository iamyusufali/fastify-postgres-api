import { FastifyInstance, RouteOptions } from 'fastify';

import PlayerControllers from '../controllers/players.controllers';
import PlayerSchemas from '../schemas/players.schemas';

type TAppRoutesProvider = (
  fastify: FastifyInstance,
  options: RouteOptions,
  done: Function
) => void;

const appRoutesProvider: TAppRoutesProvider = (fastify, options, done) => {
  fastify.route({
    method: 'GET',
    url: '/players',
    schema: PlayerSchemas.GetPlayers,
    handler: PlayerControllers.getPlayers,
  });

  fastify.route({
    method: 'POST',
    url: '/player',
    schema: PlayerSchemas.AddPlayer,
    handler: PlayerControllers.addPlayer,
  });

  done();
};

export default appRoutesProvider;
