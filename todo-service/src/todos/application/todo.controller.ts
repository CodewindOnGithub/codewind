import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AddTodoCommand } from '../domain/models/commands/add-todo.command';
import { Todo } from '../domain/models/todo';
import { TodosFacade } from '../domain/todos.facade';
import { DeleteTodoCommand } from './../domain/models/commands/delete-todo.command';
import { UpdateTodoCommand } from './../domain/models/commands/update-todo.command';

@Controller('todos')
export class TodoController {
  constructor(private readonly facade: TodosFacade) {}

  @Get()
  async getTodos(): Promise<Todo[]> {
    return this.facade.getTodosUseCase.handle();
  }

  @Post()
  async addTodo(@Body() command: AddTodoCommand): Promise<Todo> {
    return this.facade.addTodoUseCase.handle(command);
  }

  @Delete()
  async deleteTodo(@Body() command: DeleteTodoCommand): Promise<void> {
    await this.facade.deleteTodoUseCase.handle(command);
  }

  @Put()
  async updateTodo(@Body() command: UpdateTodoCommand): Promise<void> {
    await this.facade.updateTodoUseCase.handle(command);
  }
}
