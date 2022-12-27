import { DeleteTodoCommand } from '../../models/commands/delete-todo.command';

export abstract class DeleteTodoUseCase {
  abstract handle(command: DeleteTodoCommand): Promise<void>;
}
