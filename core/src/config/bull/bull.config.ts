import { registerAs } from '@nestjs/config';

export default registerAs('bull', () => ({
  connection: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT ?? '6379', 10),
    password: process.env.REDIS_PASSWORD || undefined,
  },
  defaultJobOptions: {
    attempts: 3,
    removeOnComplete: 100,
    removeOnFail: 1000,
  },
}));
