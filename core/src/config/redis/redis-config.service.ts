import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedisConfigService {
  constructor(private readonly config: ConfigService) {}

  get host(): string {
    return this.config.getOrThrow<string>('redis.host');
  }

  get port(): number {
    return this.config.getOrThrow<number>('redis.port');
  }

  get password(): string | undefined {
    return this.config.get<string>('redis.password');
  }

  get username(): string | undefined {
    return this.config.get<string>('redis.username');
  }

  get database(): number {
    return this.config.getOrThrow<number>('redis.database');
  }
}
