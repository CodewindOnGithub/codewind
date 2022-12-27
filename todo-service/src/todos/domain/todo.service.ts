import { Injectable } from '@nestjs/common';
import { AddTodoCommand } from './models/commands/add-todo.command';
import { DeleteTodoCommand } from './models/commands/delete-todo.command';
import { Todo } from './models/todo';
import { AddTodo } from './ports/incoming/add-todo';
import { DeleteTodo } from './ports/incoming/delete-todo';
import { GetTodos } from './ports/incoming/get-todos';
import { TodoRepository } from './ports/outgoing/todo.repository';

// implement use cases here, use cases are defined as incoming ports
@Injectable()
export class TodoService implements AddTodo, DeleteTodo, GetTodos {
  // outgoing ports will be injected here, and need to be provided in module to replace abstract class
  constructor(private readonly todoRepository: TodoRepository) {}

  async getTodos(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }

  async addTodo(command: AddTodoCommand): Promise<Todo> {
    const todo = new Todo();
    todo.title = command.title;
    todo.isDone = false;
    todo.createdOn = new Date();
    const id = await this.todoRepository.save(todo);
    todo.id = id;
    return todo;
  }

  async deleteTodo(command: DeleteTodoCommand): Promise<void> {
    await this.todoRepository.delete(command.id);
  }
}
