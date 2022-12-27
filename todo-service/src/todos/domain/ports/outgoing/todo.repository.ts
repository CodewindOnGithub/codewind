import { Injectable } from '@nestjs/common';
import { Todo } from '../../models/todo';

@Injectable()
export abstract class TodoRepository {
  abstract findOneById(id: string): Promise<Todo | undefined>;
  abstract findAll(): Promise<Todo[]>;
  abstract save(todo: Todo): Promise<string>;
  abstract update(todo: Todo): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
