import { useState } from 'react';
import { signIn } from '../services/UserService';
import { handleErrorResponse } from '../utils/errorHandler';

import {
  Container,
  Heading,
  ErrorMessage,
  Form,
  Input,
  Button,
} from '../styles/SignIn.styled';

const SignIn = ({ onSignIn }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(credentials)
      .then((response) => {
        const { token, role } = response.data;
        onSignIn(token, role, credentials.email);
      })
      .catch((error) => {
        handleErrorResponse(error);
      });
  };

  return (
    <Container>
      <Heading>Sign In</Heading>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email"
          required
          type="email"
        />
        <Input
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          required
          type="password"
        />
        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
};

export default SignIn;