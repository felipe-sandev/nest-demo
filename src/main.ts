import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.modules.js';
import { loggerGlobal } from './middlewares/logger.middleware.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(loggerGlobal);
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
