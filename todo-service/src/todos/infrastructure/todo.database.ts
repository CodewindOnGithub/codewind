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

  async findOneById(id: string): Promise<Todo | undefined> {
    const document = await this.todoDocument
      .findById(new Types.ObjectId(id))
      .exec();
    if (document) {
      return {
        id: document._id.toString(),
        title: document.title,
        createdOn: document.createdOn,
        isDone: document.isDone,
      };
    } else return undefined;
  }

  async update(todo: Todo): Promise<void> {
    await this.todoDocument.updateOne(todo).exec();
  }

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
