import { IsNotEmpty } from 'class-validator';

export class UpdateTodoCommand {
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  changes: {
    title?: string;
    isDone?: boolean;
  };
}
