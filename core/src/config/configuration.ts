import appConfig from './app/app.config';
import databaseConfig from './database/database.config';
import redisConfig from './redis/redis.config';
import bullConfig from './bull/bull.config';
import swaggerConfig from './swagger/swagger.config';

export default [
  appConfig,
  databaseConfig,
  redisConfig,
  bullConfig,
  swaggerConfig,
];
