import Fastify from 'fastify';
import envVars from './envConfig';
import appRoutes from './routes';

const fastifyServer = Fastify({ logger: true });
const { PORT } = envVars;

fastifyServer.register(appRoutes);

const start = async () => {
  try {
    await fastifyServer.listen(PORT);
  } catch (err) {
    fastifyServer.log.error(err);
    process.exit(1);
  }
};

start();
