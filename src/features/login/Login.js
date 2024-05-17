import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Login } from '../../store.js'; // Assuming you have defined this action in your Redux store

const Login = ({ toggleForm }) => {
  const [key, setKey] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ key }));
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <button type="submit">Login</button>
      <p>Don't have an account? <span onClick={toggleForm}>Register</span></p>
    </form>
  );
};

export default Login;
