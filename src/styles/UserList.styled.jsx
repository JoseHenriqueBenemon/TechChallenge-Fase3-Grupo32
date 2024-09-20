import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;
`;

export const Heading = styled.h2`
  text-align: center;
`;

export const UserItem = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
`;

export const Email = styled.p`
  margin: 0 0 10px;
  font-weight: bold;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 8px 12px;
  margin-left: 10px;
  background-color: ${(props) => (props.delete ? '#dc3545' : '#17a2b8')};
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.delete ? '#c82333' : '#138496')};
  }
`;