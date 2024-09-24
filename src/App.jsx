import { useState } from 'react';
import SignIn from './components/SignIn';
import UserManagement from './components/UserManagement';
import PostManagement from './components/PostManagement';
import PostDetails from './components/PostDetails';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import {
  Container,
  Header,
  SignOutButton,
  NavBar,
  NavButton,
  ContentWrapper
} from './styles/App.styled';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState(null);

  const handleSignIn = (token, role, email) => {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('email', email)
    setToken(token);
    setRole(role);
    setEmail(email);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    setToken(null);
    setRole(null);
    setEmail(null);
  };

  if (!token) {
    return (
      <Container>
        <Header>
          <h1>My Application</h1>
        </Header>
        <ContentWrapper>
          <SignIn onSignIn={handleSignIn} />
        </ContentWrapper>
      </Container>
    );
  }

  return (
    <Router>
      <Container>
        <Header>
          <h1>Post Project</h1>
          <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
          <NavBar>
            {localStorage.getItem("role") === 'Teacher' && (
              <NavButton to="/users">User Management</NavButton>
            )}
            <NavButton to="/posts">Post Management</NavButton>
          </NavBar>
        </Header>
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Navigate to="/posts" />} />
            {localStorage.getItem("role") === 'Teacher' && (
              <Route path="/users" element={<UserManagement />} />
            )}
            <Route path="/posts" element={<PostManagement />} />
            <Route path="/posts/:id" element={<PostDetails />} />
          </Routes>
        </ContentWrapper>
      </Container>
    </Router>
  );
};

export default App;