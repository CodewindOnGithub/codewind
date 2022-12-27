import { Injectable } from '@nestjs/common';
import { DeleteTodoCommand } from '../models/commands/delete-todo.command';
import { DeleteTodoUseCase } from '../ports/incoming/delete-todo';
import { TodoRepository } from '../ports/outgoing/todo.repository';

@Injectable()
export class DeleteTodoService implements DeleteTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async handle(command: DeleteTodoCommand): Promise<void> {
    await this.todoRepository.delete(command.id);
  }
}
