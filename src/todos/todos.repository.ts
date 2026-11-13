import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosRepository {
  private todos: any[] = [
    {
      id: 1,
      title: 'Todo 1',
      description: '',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'Description for Todo 2',
      isCompleted: null,
    },
    {
      id: 3,
      title: 'Todo 3',
      description: 'Description for Todo 3',
      isCompleted: true,
    },
  ];
  async getTodos() {
    return this.todos;
  }
}
