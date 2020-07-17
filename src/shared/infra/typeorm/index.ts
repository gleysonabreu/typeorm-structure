import { createConnection } from 'typeorm';

require('dotenv/config');

createConnection({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USER,
  password: process.env.TYPEORM_PASS,
  database: process.env.TYPEORM_DB,
  synchronize: true,

  entities: ['src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['src/shared/infra/typeorm/migrations/**/*.ts'],

  cli: {
    migrationsDir: 'src/shared/infra/typeorm/migrations/',
    entitiesDir: 'src/models',
  },
});
