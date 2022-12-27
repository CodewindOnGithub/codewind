import { createAsyncThunk } from '@reduxjs/toolkit';
import todosDataApi from '../infrastructure/todos-data.api';

export const loadTodos = createAsyncThunk('todos/loadTodos', async () => {
  return todosDataApi.fetchTodos();
});

export const saveTodo = createAsyncThunk('todos/saveTodo', async (name: string) => {
  return todosDataApi.saveTodos(name);
});
