import { AddTodoCommand } from '../../models/commands/add-todo.command';
import { Todo } from '../../models/todo';

export abstract class AddTodoUseCase {
  abstract handle(command: AddTodoCommand): Promise<Todo>;
}
