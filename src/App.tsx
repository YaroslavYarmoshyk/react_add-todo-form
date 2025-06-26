import './App.scss';
import { TodoList } from './components/TodoList';
import React, { useState } from 'react';

// import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import { TodoItem } from './types/TodoItem';
import { getNextTodoId } from './service/TodosService';

export const App = () => {
  const [todos, setTodos] = useState<TodoItem[]>(todosFromServer);
  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState(0);

  const addTodo = (todo: TodoItem) => {
    setTodos(currentTodos => [...currentTodos, todo]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addTodo({
      id: getNextTodoId(),
      title: title,
      completed: false,
      userId: userId,
    });

    setTitle('');
    setUserId(0);
  };

  return (
    <div className="App">
      <h1>Add todo form</h1>

      <form action="/api/todos" method="POST" onSubmit={handleSubmit}>
        <div className="field">
          <input type="text" data-cy="titleInput" />
          <span className="error">Please enter a title</span>
        </div>

        <div className="field">
          <select data-cy="userSelect">
            <option value="0" disabled>
              Choose a user
            </option>
          </select>

          <span className="error">Please choose a user</span>
        </div>

        <button type="submit" data-cy="submitButton">
          Add
        </button>
      </form>

      <TodoList todos={todos} />
    </div>
  );
};
