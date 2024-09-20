import { useState, useEffect } from 'react';
import { createUser, updateUser } from '../services/UserService';

import {
    Container,
    Heading,
    Form,
    Input,
    ButtonGroup,
    Button
} from '../styles/UserForm.styled';

const UserForm = ({ selectedUser, refreshUsers, clearSelection }) => {
  const [user, setUser] = useState({ email: '', password: '' });

  useEffect(() => {
    if (selectedUser) {
      setUser({ ...selectedUser, password: '' });
    } else {
      setUser({ email: '', password: '' });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      updateUser(user.id, user)
        .then(() => {
          refreshUsers();
          clearSelection();
        })
        .catch((error) => console.error('Error updating user:', error));
    } else {
      createUser(user)
        .then(() => {
          refreshUsers();
          setUser({ email: '', password: '' });
        })
        .catch((error) => console.error('Error creating user:', error));
    }
  };

  return (
    <Container>
      <Heading>{user.id ? 'Edit User' : 'Create User'}</Heading>
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          required
          type="email"
        />
        <Input
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
          required
          type="password"
        />
        <ButtonGroup>
          <Button type="submit">{user.id ? 'Update' : 'Create'}</Button>
          {user.id && (
            <Button type="button" cancel onClick={clearSelection}>
              Cancel
            </Button>
          )}
        </ButtonGroup>
      </Form>
    </Container>
  );
};

export default UserForm;