import { Todo } from '../../models/todo';

export interface GetTodos {
  getTodos(): Promise<Todo[]>;
}
