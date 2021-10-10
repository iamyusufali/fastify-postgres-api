require('dotenv').config();

import { fastify } from 'fastify';

const server = fastify({ logger: true });

server.get('/items', (req, reply) => {
  reply.send({ test: 'hello' });
});

const start = async () => {
  try {
    await server.listen(7000);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
