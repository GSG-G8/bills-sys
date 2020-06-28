import React, { useState, useContext } from 'react';
import AuthContext from '../context';

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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const { auth, user } = useContext(AuthContext);

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
        if (result.statusCode === 200) {
          user.setUserId(result.userId);
          auth.setLogged(true);
        } else {
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
      className="flex flex-col items-center p-4 mt-16"
      onSubmit={handleFormSubmit}
    >
      <input
        name="email"
        className="border-b-2 border-gray-700 mb-4 mt-20 w-64 pl-1 outline-none leading-5 transform md:w-1/3 lg:w-1/4 focus:border-primary-dark focus:placeholder-primary-dark focus:scale-105 transition duration-500 ease-in-out"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {validationErrors.email && (
        <p className="text-red-700">{validationErrors.email}</p>
      )}
      <input
        type="password"
        name="password"
        className="border-b-2 border-gray-700 mt-12 mb-4 w-64 pl-1 outline-none leading-5 transform md:w-1/3 lg:w-1/4 focus:border-primary-dark focus:placeholder-primary-dark focus:scale-105 transition duration-500 ease-in-out"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {validationErrors.password && (
        <p className="text-red-700">{validationErrors.password}</p>
      )}
      <button
        type="submit"
        className="mt-12 mb-4 pl-16 pr-16 pt-2 pb-2 rounded-full w-64 text-mich-white leading-7 font-medium bg-primary transform md:w-1/3 lg:w-1/4 hover:bg-primary-dark focus:bg-primary-dark focus:outline-none focus:scale-105 transition duration-500 ease-in-out"
      >
        Log In
      </button>
      {loginError && <p className="text-red-700">{loginError}</p>}
    </form>
  );
};

export default Login;
