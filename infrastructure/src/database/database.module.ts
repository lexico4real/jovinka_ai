import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppConfigService, DatabaseConfigService } from '@org/core';

import { createTypeOrmOptions } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [DatabaseConfigService, AppConfigService],
      useFactory: createTypeOrmOptions,
    }),
  ],
})
export class DatabaseModule {}
