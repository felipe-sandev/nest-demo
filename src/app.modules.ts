import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module.js';
import { UsersModule } from './users/user.module.js';

@Module({
  imports: [UsersModule, TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
