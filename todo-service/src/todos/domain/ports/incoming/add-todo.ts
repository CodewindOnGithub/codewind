import { AddTodoCommand } from '../../models/commands/add-todo.command';
import { Todo } from '../../models/todo';

export interface AddTodo {
  addTodo(command: AddTodoCommand): Promise<Todo>;
}
