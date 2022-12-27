import { Todo } from '@todos/models';
import axios from 'axios';

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get<Todo[]>('http://localhost:3000/todos');
  return response.data;
};

const saveTodos = async (name: string): Promise<Todo> => {
  const response = await axios.post<Todo>('http://localhost:3000/todos', { name });
  return response.data;
};

const todosDataApi = { fetchTodos, saveTodos };

export default todosDataApi;
