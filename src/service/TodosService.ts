import todosFromServer from '.././api/todos';
import { TodoItem } from '../types/TodoItem';

export function getNextTodoId(): number {
  const maxId = Math.max(...todosFromServer.map((todo: TodoItem) => todo.id));

  return maxId + 1;
}
