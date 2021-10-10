import { FastifyInstance, RouteOptions } from 'fastify';

import PlayerController from '../controllers/players.controllers';
import AppSchemas from '../schemas/players.schemas';

type TAppRoutesProvider = (
  fastify: FastifyInstance,
  options: RouteOptions,
  done: Function
) => void;

const appRoutesProvider: TAppRoutesProvider = (fastify, options, done) => {
  const Controller = new PlayerController(fastify);

  fastify.route({
    method: 'POST',
    url: '/player',
    schema: AppSchemas.AddPlayer,
    handler: Controller.addPlayer,
  });

  done();
};

export default appRoutesProvider;
