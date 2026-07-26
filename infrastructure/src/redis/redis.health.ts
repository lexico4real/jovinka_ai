import { Injectable } from "@nestjs/common";
import { RedisService } from "./redis.service";

@Injectable()
export class RedisHealthService {
  constructor(private readonly redis: RedisService) {}

  async isHealthy(): Promise<boolean> {
    return (await this.redis.client.ping()) === 'PONG';
  }
}
