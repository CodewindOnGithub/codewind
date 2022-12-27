import { Injectable } from '@nestjs/common';
import { AddTodoUseCase } from './ports/incoming/add-todo';
import { DeleteTodoUseCase } from './ports/incoming/delete-todo';
import { GetTodosUseCase } from './ports/incoming/get-todos';
import { UpdateTodoUseCase } from './ports/incoming/update-todo';

@Injectable()
export class TodosFacade {
  constructor(
    readonly updateTodoUseCase: UpdateTodoUseCase,
    readonly deleteTodoUseCase: DeleteTodoUseCase,
    readonly getTodosUseCase: GetTodosUseCase,
    readonly addTodoUseCase: AddTodoUseCase,
  ) {}
}
