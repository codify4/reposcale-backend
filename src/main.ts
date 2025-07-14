import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { raw } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configure raw body parsing for the webhook endpoint
  app.use('/lemon-squeezy/webhook', raw({ type: 'application/json' }));
  
  app.enableCors();
  await app.listen(process.env.PORT || 3001);
}

bootstrap();
