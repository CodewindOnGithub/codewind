import { Injectable } from '@nestjs/common';
import { AddTodoCommand } from '../models/commands/add-todo.command';
import { Todo } from '../models/todo';
import { AddTodoUseCase } from '../ports/incoming/add-todo';
import { TodoRepository } from '../ports/outgoing/todo.repository';

@Injectable()
export class AddTodoService implements AddTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async handle(command: AddTodoCommand): Promise<Todo> {
    const todo = new Todo();
    todo.title = command.title;
    todo.isDone = false;
    todo.createdOn = new Date();
    const id = await this.todoRepository.save(todo);
    todo.id = id;
    return todo;
  }
}
