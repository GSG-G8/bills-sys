import React, { useState } from 'react';
import propTypes from 'prop-types';

const validateForm = (email, password) => {
  const errors = {};
  if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }
  if (!password || !/^.{6,}$/i.test(password)) {
    errors.password = 'Password must be at least 6 characters';
  }
  return errors;
};

const Login = ({ auth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [loginError, setLoginError] = useState('');

  const handleLogin = () =>
    fetch('/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.statusCode === 200) auth(true);
        else {
          setLoginError(result.message);
          setValidationErrors({});
        }
      })
      .catch(() => setLoginError('Something went wrong'));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationResult = validateForm(email, password);
    if (validationResult.email || validationResult.password) {
      setValidationErrors(validationResult);
    } else handleLogin();
  };

  return (
    <form
      className="flex flex-col items-center p-4"
      onSubmit={handleFormSubmit}
    >
      <input
        type="email"
        name="email"
        className="border-b-2 border-black mb-4 mt-20"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {validationErrors.email && (
        <p className="text-red-700">{validationErrors.email}</p>
      )}
      <input
        type="password"
        name="password"
        className="border-b-2 border-black mt-12 mb-4"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {validationErrors.password && (
        <p className="text-red-700">{validationErrors.password}</p>
      )}
      <button
        type="submit"
        className="mt-12 pl-16 pr-16 pt-2 pb-2 rounded-full bg-blue-700"
      >
        Log In
      </button>
      {loginError && <p className="text-red-700">{loginError}</p>}
    </form>
  );
};

Login.propTypes = {
  auth: propTypes.func.isRequired,
};

export default Login;
