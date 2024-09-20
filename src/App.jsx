import { useState } from 'react';
import SignIn from './components/SignIn';
import UserManagement from './components/UserManagement';
import PostManagement from './components/PostManagement';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

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

  const handleSignIn = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  if (!token) {
    // If not authenticated, show the SignIn component only
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
          <h1>My Application</h1>
          <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
          {/* Navigation Buttons */}
          <NavBar>
            <NavButton to="/users">User Management</NavButton>
            <NavButton to="/posts">Post Management</NavButton>
          </NavBar>
        </Header>
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Navigate to="/users" />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/posts" element={<PostManagement />} />
          </Routes>
        </ContentWrapper>
      </Container>
    </Router>
  );
};

export default App;