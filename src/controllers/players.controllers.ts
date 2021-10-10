import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';

class PlayerController {
  public serverInstance: FastifyInstance;

  constructor(fastify: FastifyInstance) {
    this.serverInstance = fastify;
  }

  public addPlayer(request: FastifyRequest, reply: FastifyReply) {
    const { name, club } = request.body as any;

    const dbQuery = 'INSERT INTO players (name, club) VALUES ($1, $2)';

    this.serverInstance.pg.query(dbQuery, [name, club], (err) => {
      if (err) throw Error();

      reply.send({ name, club });
    });
  }
}

export default PlayerController;
