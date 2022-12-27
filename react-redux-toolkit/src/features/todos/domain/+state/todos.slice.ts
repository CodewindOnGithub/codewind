import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '@todos/models';
import { loadTodos, saveTodo } from './todos.thunks';

interface TodosState {
  todos: Todo[];
  error: string | undefined;
  status: 'idle' | 'loading' | 'failed' | 'succeeded';
}

const initialState: TodosState = {
  todos: [],
  error: undefined,
  status: 'idle',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadTodos.pending, (state, _) => {
        state.status = 'loading';
      })
      .addCase(loadTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(loadTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(saveTodo.pending, (state, _) => {
        state.status = 'loading';
      })
      .addCase(saveTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos.concat(action.payload);
      })
      .addCase(saveTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default todosSlice;
