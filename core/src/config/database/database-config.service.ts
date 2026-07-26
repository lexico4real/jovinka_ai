import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService {
  constructor(private readonly config: ConfigService) {}

  get host(): string {
    return this.config.getOrThrow<string>('database.host');
  }

  get port(): number {
    return this.config.getOrThrow<number>('database.port');
  }

  get database(): string {
    return this.config.getOrThrow<string>('database.database');
  }

  get username(): string {
    return this.config.getOrThrow<string>('database.username');
  }

  get password(): string {
    return this.config.getOrThrow<string>('database.password');
  }
}
