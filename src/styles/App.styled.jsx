import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: #343a40;
  padding: 20px;
  color: white;
  text-align: center;
  position: relative;
`;

export const SignOutButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 8px 12px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const NavButton = styled(Link)`
  margin: 0 10px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-grow: 1;
  padding: 20px;
`;