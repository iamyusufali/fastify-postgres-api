import { FastifyRequest, FastifyReply } from 'fastify';
import { fastifyServer } from '../server';

namespace PlayerController {
  export const addPlayer = (request: FastifyRequest, reply: FastifyReply) => {
    const { name, club } = request.body as any;

    const dbQuery = 'INSERT INTO players (name, club) VALUES ($1, $2)';

    fastifyServer.pg.query(dbQuery, [name, club], (err) => {
      if (err) throw Error();

      reply.send({ name, club });
    });
  };
}

export default PlayerController;
