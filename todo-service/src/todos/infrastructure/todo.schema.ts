import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<TodoEntity>;

@Schema()
export class TodoEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  isDone: boolean;

  @Prop({ required: true })
  createdOn: Date;
}

export const TodoSchema = SchemaFactory.createForClass(TodoEntity);
