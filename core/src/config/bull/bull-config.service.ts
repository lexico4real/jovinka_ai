import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BullConfigService {
  constructor(private readonly config: ConfigService) {}

  get connection() {
    return this.config.getOrThrow('bull.connection');
  }

  get defaultJobOptions() {
    return this.config.getOrThrow('bull.defaultJobOptions');
  }

  get options() {
    return {
      connection: this.connection,
      defaultJobOptions: this.defaultJobOptions,
    };
  }
}
