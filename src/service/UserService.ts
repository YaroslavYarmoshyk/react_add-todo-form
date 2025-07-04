import { User } from '../types/User';
import usersFromServer from '../api/users';

export function getUserById(id: number): User {
  const foundUser = usersFromServer.find((user: User) => user.id === id);

  if (!foundUser) {
    throw new Error('User not found by id: ' + id);
  }

  return foundUser;
}
