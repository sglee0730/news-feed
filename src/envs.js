export default {
  PORT: process.env.DB_HOST || 80,
  DB_HOST: process.env.DB_HOST || 'locahost:27017',
};
