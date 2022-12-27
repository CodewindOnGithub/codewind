import { IsNotEmpty } from 'class-validator';

export class AddTodoCommand {
  @IsNotEmpty()
  title: string;
}
