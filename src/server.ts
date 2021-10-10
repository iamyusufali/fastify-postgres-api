import Fastify from 'fastify';
import envVars from './envConfig';

const server = Fastify({ logger: true });
const { PORT } = envVars;

server.get('/items', (req, reply) => {
  reply.send({ test: 'Testa' });
});

const start = async () => {
  try {
    await server.listen(PORT);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
