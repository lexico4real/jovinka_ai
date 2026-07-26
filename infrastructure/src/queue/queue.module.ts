import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';

import { BullInfrastructureModule } from './bull';
import { BullService } from './bull';
import { QueueNames } from './constants';

@Module({
  imports: [
    BullInfrastructureModule,

    BullModule.registerQueue(
      { name: QueueNames.EMAIL },
      { name: QueueNames.NOTIFICATION },
      { name: QueueNames.AI },
      { name: QueueNames.IMPORT },
      { name: QueueNames.EXPORT },
    ),
  ],
  providers: [BullService],
  exports: [BullService],
})
export class QueueModule {}
