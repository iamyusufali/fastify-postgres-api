import { FastifyRequest, FastifyReply } from 'fastify';
import fastifyInstance from '../server';

type THandler = (request: FastifyRequest, reply: FastifyReply) => void;

namespace PlayerControllers {
  export const addPlayer: THandler = (request, reply) => {
    const { name, club } = request.body as any;

    const dbQuery = 'INSERT INTO players (name, club) VALUES ($1, $2)';

    fastifyInstance.pg.query(dbQuery, [name, club], (err) => {
      if (err) throw Error();

      reply.send({ name, club });
    });
  };

  export const getPlayers: THandler = (_, reply) => {
    const dbQuery = 'SELECT * FROM players ORDER BY id ASC';

    fastifyInstance.pg.query(dbQuery, (err, result) => {
      if (err) throw Error();

      reply.send(result.rows);
    });
  };
}

export default PlayerControllers;
