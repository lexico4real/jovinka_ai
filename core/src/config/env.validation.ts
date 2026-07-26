import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'test', 'production')
    .default('development'),

  PORT: Joi.number().default(3000),

  API_PREFIX: Joi.string().default('api'),

  POSTGRES_HOST: Joi.string().required(),

  POSTGRES_PORT: Joi.number().default(5432),

  POSTGRES_DB: Joi.string().required(),

  POSTGRES_USER: Joi.string().required(),

  POSTGRES_PASSWORD: Joi.string().required(),

  REDIS_HOST: Joi.string().required(),

  REDIS_PORT: Joi.number().default(6379),

  REDIS_PASSWORD: Joi.string().allow('').optional(),

  JWT_SECRET: Joi.string().required(),

  JWT_EXPIRES_IN: Joi.string().default('1d'),
});
