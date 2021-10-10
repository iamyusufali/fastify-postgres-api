import fastify from 'fastify';
import fastifyPostgres from 'fastify-postgres';

import envVars from './envConfig';
import playersRoutes from './routes/players.routes';

const fastifyServer = fastify({ logger: true });
const { PORT } = envVars;

fastifyServer.register(playersRoutes);

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
fastifyServer.register(fastifyPostgres, { connectionString });

const start = async () => {
  try {
    await fastifyServer.listen(PORT);
  } catch (err) {
    fastifyServer.log.error(err);
    process.exit(1);
  }
};

start();
