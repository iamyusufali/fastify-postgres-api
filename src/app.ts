import fastify, { FastifyInstance } from 'fastify';
import fastifyPostgres from 'fastify-postgres';
import fastifySwagger from 'fastify-swagger';

import PlayerRoutesProvider from './routes/players.routes';

interface IEnvVars {
  SERVER_PORT: string | number;
  NODE_ENV: string;
  DATABASE_URL: string;
}

class App {
  public fastifyInstance: FastifyInstance;

  constructor() {
    this.fastifyInstance = fastify({ logger: true });
  }

  private async connectToPostgres() {
    const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
    await this.fastifyInstance.register(fastifyPostgres, {
      connectionString:
        process.env.NODE_ENV === 'production'
          ? process.env?.DATABASE_URL
          : connectionString,
    });
  }

  private async registerSwagger() {
    await this.fastifyInstance.register(fastifySwagger, { exposeRoute: true });
  }

  private async registerAllRoutes() {
    await this.fastifyInstance.register(PlayerRoutesProvider);
  }

  public async initialize() {
    try {
      await this.connectToPostgres();
      await this.registerSwagger();
      await this.registerAllRoutes();
    } catch (err) {
      console.log(err);
      throw new Error('Unable to initialize application.');
    }
  }
}

export default App;
