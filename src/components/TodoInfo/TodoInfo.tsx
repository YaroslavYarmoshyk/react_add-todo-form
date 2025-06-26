import { TodoItem } from '../../types/TodoItem';
import { getUserById } from '../../service/UserService';
import React from 'react';

type Props = {
  todo: TodoItem;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const user = getUserById(todo.userId);

  return (
    <article data-id={todo.id} className="TodoInfo TodoInfo--completed">
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <a className="UserInfo" href={`mailto:${user?.email}`}>
        {user?.name}
      </a>
    </article>
  );
};
