import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Landing!</h1>
      <button type='button' onClick={() => navigate('/Dashboard')}>
        Ir para Dash!
      </button>
    </main>
  );
};

export default LandingPage;
