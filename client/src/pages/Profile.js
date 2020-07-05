import React, { useEffect, useState } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';

import { ReactComponent as User } from '../assets/user.svg';
import { Loader } from '../components';
import Logout from '../components/Logout';

const Profile = ({ setLogged, setUserId }) => {
  const [profile, setProfile] = useState();
  const [error, setError] = useState('');
  const getProfile = async () => {
    try {
      const { data } = await axios.get('api/v1/profile');
      setProfile(data);
    } catch (err) {
      if (err.response) setError(err.response.data.message);
      else setError('Something went error');
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  if (error) return <p>{error}</p>;
  if (!profile) return <Loader />;
  return (
    <div className="m-auto text-center">
      <User className="text-center m-auto mt-10" />
      <div className="m-4 font-bold">
        {profile.first_name} {profile.last_name}
      </div>
      <div className="m-6">
        <h1>Mobile: {profile.mobile_num}</h1>
        <h1>Email: {profile.email}</h1>
        <h1>Number of people in my house: {profile.family_count} persons</h1>
      </div>
      <Logout setLogged={setLogged} setUserId={setUserId} />
    </div>
  );
};

Profile.propTypes = {
  setLogged: propTypes.func.isRequired,
  setUserId: propTypes.func.isRequired,
};

export default Profile;
