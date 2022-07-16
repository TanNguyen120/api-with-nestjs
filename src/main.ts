import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoDB from './config/mongooseConfig.js';

// bootstrap the server
async function bootstrap() {
  // try to connect to mongoDB server

  // call for root module
  const app = await NestFactory.create(AppModule);
  await app.listen(4321);
}
bootstrap();
