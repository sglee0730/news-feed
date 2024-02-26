import express from 'express';
import pino from 'pino-http';
import envs from './envs.js';
import initialize from './initialize.js';

initialize();
const logger = pino();

const app = express();
app.use(logger);

app.listen(envs.PORT, () => {
  console.log('hello world');
});
