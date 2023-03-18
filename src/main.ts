import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3000;
  const app = await NestFactory.create(AppModule);
  console.log(`Running on PORT ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
