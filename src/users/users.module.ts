import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';
import { loggerGlobal } from '../middlewares/logger.middleware.js';
import { UsersRepository } from './users.repository.js';

const mockUserService = { getUsers: () => 'Mock users test' };

@Module({
  // providers: [UsersService, UsersRepository],
  providers: [
    { provide: UsersService, useValue: mockUserService },
    UsersRepository,
  ],
  controllers: [UsersController],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(loggerGlobal).forRoutes('users');
  }
}
