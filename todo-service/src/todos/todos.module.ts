import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './application/todo.controller';
import { AddTodoService } from './domain/adapters/add-todo.service';
import { DeleteTodoService } from './domain/adapters/delete-todo.service';
import { GetTodosService } from './domain/adapters/get-todos.service';
import { UpdateTodoService } from './domain/adapters/update-todo.service';
import { DeleteTodoUseCase } from './domain/ports/incoming/delete-todo';
import { UpdateTodoUseCase } from './domain/ports/incoming/update-todo';

import { AddTodoUseCase } from './domain/ports/incoming/add-todo';
import { GetTodosUseCase } from './domain/ports/incoming/get-todos';
import { TodoRepository } from './domain/ports/outgoing/todo.repository';
import { TodosFacade } from './domain/todos.facade';
import { TodoDatabase } from './infrastructure/todo.database';
import { TodoEntity, TodoSchema } from './infrastructure/todo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TodoEntity.name, schema: TodoSchema }]),
  ],
  providers: [
    { provide: TodoRepository, useClass: TodoDatabase },
    { provide: UpdateTodoUseCase, useClass: UpdateTodoService },
    { provide: DeleteTodoUseCase, useClass: DeleteTodoService },
    { provide: GetTodosUseCase, useClass: GetTodosService },
    { provide: AddTodoUseCase, useClass: AddTodoService },
    TodosFacade,
  ],
  controllers: [TodoController],
})
export class TodosModule {}
