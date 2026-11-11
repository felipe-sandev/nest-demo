import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module.js';
import { UsersModule } from './users/user.module.js';
import { ObserveModule } from './observe.js';

@Module({
  imports: [
    ObserveModule.forRoot({ serviceId: 'nest-demo' }),
    UsersModule,
    TodosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
