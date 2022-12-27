import { Injectable } from '@nestjs/common';
import { UpdateTodoCommand } from '../../models/commands/update-todo.command';

@Injectable()
export abstract class UpdateTodoUseCase {
  abstract handle(command: UpdateTodoCommand): Promise<void>;
}
