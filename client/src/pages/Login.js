import React, { useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

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

const Login = ({ setLogged, setId }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const { t } = useTranslation();

  const handleLogin = async () => {
    try {
      const { userId } = await axios.post('/api/v1/login', {
        email,
        password,
      });
      setId(userId);
      setLogged(true);
    } catch (err) {
      let error;
      if (err.response) error = err.response.data.message;
      else error = 'Something went wrong';
      setLoginError(error);
      setValidationErrors({});
    }
  };

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
        placeholder={t('email')}
        onChange={(e) => setEmail(e.target.value)}
      />
      {validationErrors.email && (
        <p className="text-red-700">{validationErrors.email}</p>
      )}
      <input
        type="password"
        name="password"
        className="border-b-2 border-gray-700 mt-12 mb-4 w-64 pl-1 outline-none leading-5 transform md:w-1/3 lg:w-1/4 focus:border-primary-dark focus:placeholder-primary-dark focus:scale-105 transition duration-500 ease-in-out"
        placeholder={t('password')}
        onChange={(e) => setPassword(e.target.value)}
      />
      {validationErrors.password && (
        <p className="text-red-700">{validationErrors.password}</p>
      )}
      <button
        type="submit"
        className="mt-12 mb-4 pl-16 pr-16 pt-2 pb-2 rounded-full w-64 text-mich-white leading-7 font-medium bg-primary transform md:w-1/3 lg:w-1/4 hover:bg-primary-dark focus:bg-primary-dark focus:outline-none focus:scale-105 transition duration-500 ease-in-out"
      >
        {t('LogIn')}
      </button>
      {loginError && <p className="text-red-700">{loginError}</p>}
    </form>
  );
};

Login.propTypes = {
  setLogged: propTypes.func.isRequired,
  setId: propTypes.func.isRequired,
};

export default Login;
