import { Env } from '@kult/core';

export default {
  type: Env.get('DATABASE_TYPE', 'postgres'),
  host: Env.get('DATABASE_HOST', 'localhost'),
  port: Env.get('DATABASE_PORT', 5444),
  username: Env.get('DATABASE_USERNAME', 'admin'),
  password: Env.get('DATABASE_PASSWORD', 'admin'),
  database: Env.get('DATABASE_DATABASE', 'deployments'),
};
