import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactComponent as User } from '../assets/user.svg';
import { Loader } from '../components';

const Profile = () => {
  const [profile, setProfile] = useState();

  const getProfile = async () => {
    const { data } = await axios.get('api/v1/profile');
    setProfile(data[0]);
  };
  useEffect(() => {
    getProfile();
  }, []);
  if (!profile) return <Loader />;
  return (
    <div className="lg:ml-20">
      <div className="m-10 flex">
        <User />
        <div className="m-10 font-bold">
          {profile.first_name} {profile.last_name}
        </div>
      </div>
      <div className="m-6">
        <h1>Mobile: {profile.mobile_num}</h1>
        <h1>Email: {profile.email}</h1>
        <h1>Number of people in my house: {profile.family_count} persons</h1>
      </div>
    </div>
  );
};

export default Profile;
