import App from './app';

const Application = new App();
const fastifyInstance = Application.fastifyInstance;
const SERVER_PORT = Application.envVars?.SERVER_PORT || 5000;

(async () => {
  try {
    await Application.initialize();
    await Application.fastifyInstance.listen(SERVER_PORT);
  } catch (err) {
    Application.fastifyInstance.log.error(err);
    process.exit(1);
  }
})();

export default fastifyInstance;
