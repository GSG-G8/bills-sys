import React, { useContext } from 'react';
import propTypes from 'prop-types';

import { DataContext } from '../context';

import { ReactComponent as User } from '../assets/user.svg';
import { Loader } from '../components';
import Logout from '../components/Logout';

const Profile = ({ setLogged, setUserId }) => {
  const { error, profile } = useContext(DataContext);
  if (error) return <p>{error}</p>;
  if (!profile) return <Loader />;
  return (
    <div className="m-auto lg:text-center">
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
