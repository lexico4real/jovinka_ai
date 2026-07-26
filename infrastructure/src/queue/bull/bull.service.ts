import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue, JobsOptions } from 'bullmq';
import { QueueNames } from '../constants';


@Injectable()
export class BullService {
  constructor(
    @InjectQueue(QueueNames.EMAIL)
    private readonly emailQueue: Queue,

    @InjectQueue(QueueNames.NOTIFICATION)
    private readonly notificationQueue: Queue,

    @InjectQueue(QueueNames.AI)
    private readonly aiQueue: Queue,

    @InjectQueue(QueueNames.IMPORT)
    private readonly importQueue: Queue,

    @InjectQueue(QueueNames.EXPORT)
    private readonly exportQueue: Queue,
  ) {}

  async add(
    queueName: string,
    jobName: string,
    payload: unknown,
    options?: JobsOptions,
  ) {
    return this.getQueue(queueName).add(jobName, payload, options);
  }

  private getQueue(queueName: string): Queue {
    switch (queueName) {
      case QueueNames.EMAIL:
        return this.emailQueue;

      case QueueNames.NOTIFICATION:
        return this.notificationQueue;

      case QueueNames.AI:
        return this.aiQueue;

      case QueueNames.IMPORT:
        return this.importQueue;

      case QueueNames.EXPORT:
        return this.exportQueue;

      default:
        throw new Error(`Unknown queue: ${queueName}`);
    }
  }
}
