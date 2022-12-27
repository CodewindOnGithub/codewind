import { IsNotEmpty } from 'class-validator';

export class DeleteTodoCommand {
  @IsNotEmpty()
  id: string;
}
