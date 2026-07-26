import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

import { QueueNames } from '../constants';

@Processor(QueueNames.NOTIFICATION)
export class NotificationWorker extends WorkerHost {
  async process(job: Job): Promise<void> {
    console.log('Processing notification job', job.name, job.data);
  }
}
