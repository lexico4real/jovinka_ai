import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly config: ConfigService) {}

  get name(): string {
    return this.config.getOrThrow<string>('app.name');
  }

  get port(): number {
    return this.config.getOrThrow<number>('app.port');
  }

  get env(): string {
    return this.config.getOrThrow<string>('app.env');
  }

  get apiPrefix(): string {
    return this.config.getOrThrow<string>('app.apiPrefix');
  }

  get isDevelopment(): boolean {
    return this.env === 'development';
  }

  get isProduction(): boolean {
    return this.env === 'production';
  }
}
