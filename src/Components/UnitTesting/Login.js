// LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate(); // mock the behavior the useNavigate

  const handleLogin = async () => {
    // Assume login logic here
    // If login is successful
    navigate('/dashboard');
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
