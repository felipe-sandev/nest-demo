import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  getTodos() {
    return ['test', 'test2'];
  }
}
