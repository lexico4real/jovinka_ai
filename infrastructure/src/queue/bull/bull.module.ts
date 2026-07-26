import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';

import { BullConfigService } from '@org/core';

@Module({
  imports: [
    BullModule.forRootAsync({
      inject: [BullConfigService],
      useFactory: (config: BullConfigService) => config.options,
    }),
  ],
})
export class BullInfrastructureModule {}
