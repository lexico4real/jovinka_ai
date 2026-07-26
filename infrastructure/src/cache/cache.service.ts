import { Injectable } from '@nestjs/common';

import { RedisService } from '../redis';

@Injectable()
export class CacheService {
  constructor(private readonly redis: RedisService) {}

  async get<T>(key: string): Promise<T | null> {
    return this.redis.get<T>(key);
  }

  async set<T>(key: string, value: T, ttlInSeconds?: number): Promise<void> {
    await this.redis.set(key, value, ttlInSeconds);
  }

  async delete(key: string): Promise<void> {
    await this.redis.del(key);
  }

  async exists(key: string): Promise<boolean> {
    return this.redis.exists(key);
  }

  async clear(): Promise<void> {
    await this.redis.flush();
  }

  async remember<T>(
    key: string,
    loader: () => Promise<T>,
    ttlInSeconds = 300,
  ): Promise<T> {
    const cached = await this.get<T>(key);

    if (cached !== null) {
      return cached;
    }

    const value = await loader();

    await this.set(key, value, ttlInSeconds);

    return value;
  }
}
