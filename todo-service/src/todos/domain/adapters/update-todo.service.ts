import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateTodoCommand } from '../models/commands/update-todo.command';
import { UpdateTodoUseCase } from '../ports/incoming/update-todo';
import { TodoRepository } from '../ports/outgoing/todo.repository';

@Injectable()
export class UpdateTodoService implements UpdateTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async handle(command: UpdateTodoCommand): Promise<void> {
    const todo = await this.todoRepository.findOneById(command.id);
    if (todo) {
      const { changes } = command;
      const updated = { ...todo, ...changes };
      await this.todoRepository.update(updated);
    } else {
      throw new NotFoundException(`object with id: ${command.id} not found`);
    }
  }
}
