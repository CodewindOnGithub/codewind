import { DeleteTodoCommand } from '../../models/commands/delete-todo.command';

export interface DeleteTodo {
  deleteTodo(command: DeleteTodoCommand): void;
}
