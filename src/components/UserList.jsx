import { useState, useEffect } from 'react';
import { getUsers } from '../services/UserService';
import {
  Container,
  Heading,
  UserItem,
  Email,
  ButtonGroup,
  Button,
} from '../styles/UserList.styled';

const UserList = ({ selectUser }) => {
  const [users, setUsers] = useState([]);
  const [error403, setError403] = useState(false);

  useEffect(() => {
    refreshUsers();
  }, []);

  const refreshUsers = () => {
    getUsers()
      .then((response) => {
        setUsers(response.data);
        setError403(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        if (error.response && error.response.status === 403) {
          setError403(true);
        }
      });
  };

  if (error403) {
    return null; 
  }

  return (
    <Container>
      <Heading>Users</Heading>
      {users.map((user) => (
        <UserItem key={user.id}>
          <Email>{user.email}</Email>
          <ButtonGroup>
            <Button onClick={() => selectUser(user)}>Edit</Button>
            {}
          </ButtonGroup>
        </UserItem>
      ))}
    </Container>
  );
};

export default UserList;