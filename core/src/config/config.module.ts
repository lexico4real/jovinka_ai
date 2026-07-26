import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from './configuration';
import { validationSchema } from './env.validation';

import { AppConfigService } from './app/app-config.service';
import { DatabaseConfigService } from './database/database-config.service';
import { RedisConfigService } from './redis/redis-config.service';
import { BullConfigService } from './bull/bull-config.service';
import { SwaggerConfigService } from './swagger/swagger-config.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      load: configuration,
      validationSchema,
      envFilePath: [`.env.${process.env.NODE_ENV ?? 'development'}`, '.env'],
    }),
  ],
  providers: [
    AppConfigService,
    DatabaseConfigService,
    RedisConfigService,
    BullConfigService,
    SwaggerConfigService,
  ],
  exports: [
    AppConfigService,
    DatabaseConfigService,
    RedisConfigService,
    BullConfigService,
    SwaggerConfigService,
  ],
})
export class AppConfigurationModule {}
