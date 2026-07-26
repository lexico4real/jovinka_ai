import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppConfigService, DatabaseConfigService } from '@org/core';

export const createTypeOrmOptions = (
  databaseConfig: DatabaseConfigService,
  appConfig: AppConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.username,
  password: databaseConfig.password,
  database: databaseConfig.database,
  autoLoadEntities: true,
  synchronize: false,
  logging: appConfig.isDevelopment,
  migrationsRun: false,
  migrations: ['dist/**/migrations/*.js'],
});
