import Container from './container.js';
import mongoose from 'mongoose';
import envs from './envs.js';

export default async () => {
  const db = await mongoose.connect(envs.DB_HOST, {});
  Container.add('db', db);
};
