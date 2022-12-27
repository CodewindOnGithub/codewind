import { useAppDispatch, useAppSelector } from '@app/hooks';
import { Todo } from '@todos/models';
import { useEffect } from 'react';
import { selectTodos } from '../domain/+state/todos.selectors';
import { loadTodos } from '../domain/+state/todos.thunks';

const ToDos = () => {
  const dispatch = useAppDispatch();
  const todos: Todo[] = useAppSelector(selectTodos);

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  const renderTodos = () => todos.map((todo) => <div>{todo.title}</div>);

  return <div>{renderTodos()}</div>;
};

export default ToDos;
