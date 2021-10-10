import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';

const AppController = (fastify: FastifyInstance) => ({
  addPlayer: (request: FastifyRequest, reply: FastifyReply) => {
    const { name, club } = request.body as any;

    const dbQuery = 'INSERT INTO players (name, club) VALUES ($1, $2)';

    fastify.pg.query(dbQuery, [name, club], (err) => {
      if (err) throw Error();

      reply.send({ name, club });
    });
  },
});

export default AppController;
