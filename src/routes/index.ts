import { FastifyInstance, RouteOptions } from 'fastify';

import AppController from '../controllers';
import AppSchemas from '../schemas';

type TAppRoutesProvider = (
  fastify: FastifyInstance,
  options: RouteOptions,
  done: any
) => void;

const appRoutesProvider: TAppRoutesProvider = (fastify, options, done) => {
  fastify.route({
    method: 'GET',
    url: '/items',
    schema: AppSchemas.GetItems,
    handler: AppController.getItems,
  });

  done();
};

export default appRoutesProvider;
