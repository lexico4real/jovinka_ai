import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SwaggerConfigService {
  constructor(private readonly config: ConfigService) {}

  get title(): string {
    return this.config.getOrThrow<string>('swagger.title');
  }

  get description(): string {
    return this.config.getOrThrow<string>('swagger.description');
  }

  get version(): string {
    return this.config.getOrThrow<string>('swagger.version');
  }
}
