import { Injectable } from '@nestjs/common';
import { Todo } from '../../models/todo';

@Injectable()
export abstract class TodoRepository {
  abstract findAll(): Promise<Todo[]>;
  abstract save(todo: Todo): Promise<string>;
  abstract delete(id: string): Promise<void>;
}
