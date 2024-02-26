import Container from './container.js';
import mongoose from 'mongoose';
import envs from './envs.js';

export default () => {
  const db = mongoose.connect(envs.DB_HOST, {});
  Container.add('db', db);
};
