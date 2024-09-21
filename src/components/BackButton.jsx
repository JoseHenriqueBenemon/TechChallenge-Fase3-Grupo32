import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import {
    Button
} from "../styles/BackButton.styled";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button onClick={handleGoBack}>
      <FaArrowLeft style={{ marginRight: '5px' }} />
      Voltar
    </Button>
  );
};

export default BackButton;