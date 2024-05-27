import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { LoginWithEmail } from '../../store.js'; // Assuming you have defined this action in your Redux store
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(LoginWithEmail({ email, password }));
      navigate("/lobby");
    } catch (error) {
      setLoginError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {loginError && <p className="error">{loginError}</p>}
      <button type="submit">Login</button>
      <p>
        Don't have an account yet? <a href="/register">Register Now</a>
      </p>
      <p>
        <a href="/reset-password">Forgot your password?</a>
      </p>
    </form>
  );
};

export default Login;
