import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import propTypes from 'prop-types';

const Logout = ({ setLogged, setUserId }) => {
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await axios.get('api/v1/logout');
      setUserId('');
      setLogged(false);
      history.push('/');
    } catch (err) {
      if (err.response) setError(err.response.data.message);
      else setError('Something went wrong!');
    }
  };

  return (
    <div>
      <button
        type="submit"
        onClick={handleLogout}
        className="mt-4 mb-4 pl-16 pr-16 pt-2 pb-2 rounded-full w-64 text-mich-white leading-7 font-medium bg-primary transform md:w-1/3 lg:w-1/4 hover:bg-primary-dark focus:bg-primary-dark focus:outline-none focus:scale-105 transition duration-500 ease-in-out"
      >
        Logout
      </button>
      <h3 className="bg-red">{error}</h3>
    </div>
  );
};

Logout.propTypes = {
  setLogged: propTypes.func.isRequired,
  setUserId: propTypes.func.isRequired,
};

export default Logout;
