import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service.js';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }
}
