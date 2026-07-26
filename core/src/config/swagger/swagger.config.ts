import { registerAs } from '@nestjs/config';

export default registerAs('swagger', () => ({
  title: 'Jovinka AI API',
  description: 'Backend API for Jovinka AI',
  version: '1.0.0',
}));
