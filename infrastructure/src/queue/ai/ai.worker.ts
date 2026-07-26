import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

import { QueueNames } from '../constants';

@Processor(QueueNames.EMAIL)
export class AIWorker extends WorkerHost {
  async process(job: Job): Promise<void> {
    console.log('Processing email job', job.name, job.data);
  }
}
