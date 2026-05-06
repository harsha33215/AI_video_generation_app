import 'dotenv/config';

export const env = {
  PORT: process.env.PORT ?? '8080',
  JWT_SECRET: process.env.JWT_SECRET ?? 'change-me',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ?? '',
  RUNWAY_API_KEY: process.env.RUNWAY_API_KEY ?? '',
  PIKA_API_KEY: process.env.PIKA_API_KEY ?? '',
  LUMA_API_KEY: process.env.LUMA_API_KEY ?? ''
};
