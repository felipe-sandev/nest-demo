import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';
import { loggerGlobal } from '../middlewares/logger.middleware.js';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(loggerGlobal).forRoutes('users');
  }
}
