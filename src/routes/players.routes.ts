import { FastifyInstance, RouteOptions } from 'fastify';

import AppController from '../controllers/players.controllers';
import AppSchemas from '../schemas';

type TAppRoutesProvider = (
  fastify: FastifyInstance,
  options: RouteOptions,
  done: Function
) => void;

const appRoutesProvider: TAppRoutesProvider = (fastify, options, done) => {
  fastify.route({
    method: 'POST',
    url: '/player',
    schema: AppSchemas.AddPlayer,
    handler: AppController(fastify).addPlayer,
  });

  done();
};

export default appRoutesProvider;
