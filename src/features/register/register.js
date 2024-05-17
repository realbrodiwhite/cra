import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../store.js'; // Assuming you have defined this action in your Redux store

const Register = ({ toggleForm }) => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ username }));
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Enter a username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Register</button>
      <p>Already have an account? <span onClick={toggleForm}>Login</span></p>
    </form>
  );
};

export default Register;
