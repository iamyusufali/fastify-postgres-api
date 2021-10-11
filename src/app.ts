import fastify, { FastifyInstance } from 'fastify';
import dotenv from 'dotenv';
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
  public envVars: IEnvVars | undefined;

  constructor() {
    this.fastifyInstance = fastify({ logger: true });

    this.loadEnvVariables();
  }

  private async loadEnvVariables() {
    const result = dotenv.config();

    if (result.error) throw new Error('Unable to parse Environment variables.');

    this.envVars = {
      SERVER_PORT: process.env.PORT as string | number,
      NODE_ENV: process.env.NODE_ENV as string,
      DATABASE_URL: process.env.DATABASE_URL as string,
    };

    return Promise.resolve('Loaded Environment variables.');
  }

  private async connectToPostgres() {
    const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
    await this.fastifyInstance.register(fastifyPostgres, {
      connectionString:
        this.envVars?.NODE_ENV === 'production'
          ? this.envVars?.DATABASE_URL
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
