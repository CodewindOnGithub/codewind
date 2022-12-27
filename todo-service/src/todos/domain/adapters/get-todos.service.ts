import { Injectable } from '@nestjs/common';
import { Todo } from '../models/todo';
import { GetTodosUseCase } from '../ports/incoming/get-todos';
import { TodoRepository } from '../ports/outgoing/todo.repository';

@Injectable()
export class GetTodosService implements GetTodosUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async handle(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }
}
