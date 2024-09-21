import { useState, useEffect } from 'react';
import { createUser, updateUser } from '../services/UserService';
import { handleErrorResponse } from '../utils/errorHandler';

import {
    Container,
    Heading,
    Form,
    Input,
    Select,
    ButtonGroup,
    Button
} from '../styles/UserForm.styled';

const UserForm = ({ selectedUser, refreshUsers, clearSelection }) => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    role: 'Student', // Default role
    registration_number: '',
    department: '',
  };

  const [user, setUser] = useState(initialState);

  useEffect(() => {
    if (selectedUser) {
      setUser({
        ...selectedUser,
        password: '', // Clear password for security
      });
    } else {
      setUser(initialState);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));

    // Reset fields when role changes
    if (name === 'role') {
      setUser((prevUser) => ({
        ...prevUser,
        registration_number: '',
        department: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Exclude fields based on role
    const userData = { ...user };

    if (user.role === 'Teacher') {
      delete userData.registration_number;
    } else if (user.role === 'Student') {
      delete userData.department;
    }

    if (user.id) {
      updateUser(user.id, userData)
        .then(() => {
          refreshUsers();
          clearSelection();
        })
        .catch((error) => {
          handleErrorResponse(error);
        });
    } else {
      createUser(userData)
        .then(() => {
          refreshUsers();
          setUser(initialState);
        })
        .catch((error) => {
          handleErrorResponse(error);
        });
    }
  };

  return (
    <Container>
      <Heading>{user.id ? 'Edit User' : 'Create User'}</Heading>
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
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
        <Select name="role" value={user.role} onChange={handleChange} required>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </Select>

        {user.role === 'Student' && (
          <Input
            name="registration_number"
            value={user.registration_number}
            onChange={handleChange}
            placeholder="Registration Number"
            required
          />
        )}

        {user.role === 'Teacher' && (
          <Input
            name="department"
            value={user.department}
            onChange={handleChange}
            placeholder="Department"
            required
          />
        )}

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