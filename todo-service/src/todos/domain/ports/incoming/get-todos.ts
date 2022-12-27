import { Todo } from '../../models/todo';

export abstract class GetTodosUseCase {
  abstract handle(): Promise<Todo[]>;
}
