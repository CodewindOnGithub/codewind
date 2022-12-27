import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AddTodoCommand } from '../domain/models/commands/add-todo.command';
import { Todo } from '../domain/models/todo';
import { TodoService } from '../domain/todo.service';
import { DeleteTodoCommand } from './../domain/models/commands/delete-todo.command';

@Controller('todos')
export class TodoController {
  constructor(private readonly todosService: TodoService) {}

  @Get()
  async getTodos(): Promise<Todo[]> {
    return this.todosService.getTodos();
  }

  @Post()
  async addTodo(@Body() payload: AddTodoCommand): Promise<Todo> {
    return this.todosService.addTodo(payload);
  }

  @Delete()
  async deleteTodo(@Body() payload: DeleteTodoCommand): Promise<void> {
    return this.todosService.deleteTodo(payload);
  }
}
