import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './application/todo.controller';
import { TodoRepository } from './domain/ports/outgoing/todo.repository';
import { TodoService } from './domain/todo.service';
import { TodoDatabase } from './infrastructure/todo.database';
import { TodoEntity, TodoSchema } from './infrastructure/todo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TodoEntity.name, schema: TodoSchema }]),
  ],
  providers: [{ provide: TodoRepository, useClass: TodoDatabase }, TodoService],
  controllers: [TodoController],
})
export class TodosModule {}
