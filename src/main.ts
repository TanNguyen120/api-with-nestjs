import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// bootstrap the server
async function bootstrap() {
  // call for root module
  const app = await NestFactory.create(AppModule);
  await app.listen(4321);
}
bootstrap();
