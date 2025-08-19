import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      logLevels: ['log', 'error', 'warn', 'debug', 'verbose'],
      json: true,
    }),
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
