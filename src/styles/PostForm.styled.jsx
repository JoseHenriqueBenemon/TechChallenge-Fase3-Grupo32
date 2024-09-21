import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;
`;

export const Heading = styled.h2`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
`;

export const Select = styled.select`
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  min-height: 100px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin-left: 10px;
  background-color: ${(props) => (props.cancel ? '#6c757d' : '#28a745')};
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.cancel ? '#5a6268' : '#218838')};
  }
`;