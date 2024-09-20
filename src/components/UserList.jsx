import { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../services/UserService';

import {
    Container,
    Heading,
    UserItem,
    Email,
    ButtonGroup,
    Button
 } from '../styles/UserList.styled';

const UserList = ({ selectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    refreshUsers();
  }, []);

  const refreshUsers = () => {
    getUsers()
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching users:', error));
  };

  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => refreshUsers())
      .catch((error) => console.error('Error deleting user:', error));
  };

  return (
    <Container>
      <Heading>Users</Heading>
      {users.map((user) => (
        <UserItem key={user.id}>
          <Email>{user.email}</Email>
          <ButtonGroup>
            <Button onClick={() => selectUser(user)}>Edit</Button>
            <Button delete onClick={() => handleDelete(user.id)}>
              Delete
            </Button>
          </ButtonGroup>
        </UserItem>
      ))}
    </Container>
  );
};

export default UserList;