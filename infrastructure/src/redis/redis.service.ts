import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';

import { RedisConfigService } from '@org/core';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private redis!: Redis;

  constructor(private readonly config: RedisConfigService) {}

  async onModuleInit(): Promise<void> {
    this.redis = new Redis({
      host: this.config.host,
      port: this.config.port,
      username: this.config.username,
      password: this.config.password,
      db: this.config.database,
      lazyConnect: true,
      maxRetriesPerRequest: 3,
    });

    await this.redis.connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.redis.quit();
  }

  get client(): Redis {
    return this.redis;
  }

  async get<T>(key: string): Promise<T | null> {
    const value = await this.redis.get(key);

    if (!value) {
      return null;
    }

    return JSON.parse(value) as T;
  }

  async set(key: string, value: unknown, ttlInSeconds?: number): Promise<void> {
    const serialized = JSON.stringify(value);

    if (ttlInSeconds) {
      await this.redis.set(key, serialized, 'EX', ttlInSeconds);
    } else {
      await this.redis.set(key, serialized);
    }
  }

  async del(key: string): Promise<number> {
    return this.redis.del(key);
  }

  async exists(key: string): Promise<boolean> {
    return (await this.redis.exists(key)) === 1;
  }

  async flush(): Promise<void> {
    await this.redis.flushdb();
  }
}
