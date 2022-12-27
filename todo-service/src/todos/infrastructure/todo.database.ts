import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Todo } from '../domain/models/todo';
import { TodoRepository } from '../domain/ports/outgoing/todo.repository';
import { TodoDocument, TodoEntity } from './todo.schema';

export class TodoDatabase implements TodoRepository {
  constructor(
    @InjectModel(TodoEntity.name)
    private readonly todoDocument: Model<TodoDocument>,
  ) {}

  async findAll(): Promise<Todo[]> {
    const documents = await this.todoDocument.find().exec();
    return documents.map(({ _id, title, createdOn, isDone }) => ({
      id: _id.toString(),
      title,
      createdOn,
      isDone,
    }));
  }

  async save(todo: Todo): Promise<string> {
    const result = await this.todoDocument.create(todo);
    return result._id.toString();
  }

  async delete(id: string): Promise<void> {
    await this.todoDocument.deleteOne({ _id: new Types.ObjectId(id) });
  }
}
